import React, { Component } from 'react';
import BootingScreen from './screen/booting_screen';
import Desktop from './screen/desktop';
import LockScreen from './screen/lock_screen';
import Navbar from './screen/navbar';
import RecruiterMode from './RecruiterMode';
import ReactGA from 'react-ga4';

export default class Ubuntu extends Component {
	constructor() {
		super();
		this.state = {
			screen_locked: false,
			bg_image_name: 'wall-4',
			booting_screen: true,
			booting_screen: true,
			shutDownScreen: false,
			user_name: 'Anmol',
			recruiter_mode: false,
		};
	}

	componentDidMount() {
		this.getLocalData();
	}

	setTimeOutBootScreen = () => {
		setTimeout(() => {
			this.setState({ booting_screen: false });
		}, 3000);
	};

	getLocalData = () => {
		// Get Previously selected Background Image
		let bg_image_name = localStorage.getItem('bg-image');
		if (bg_image_name !== null && bg_image_name !== undefined) {
			this.setState({ bg_image_name });
		}

		// Always show boot screen on load
		this.setState({ booting_screen: true });
		this.setTimeOutBootScreen();

		// get shutdown state
		let shut_down = localStorage.getItem('shut-down');
		if (shut_down !== null && shut_down !== undefined && shut_down === 'true') this.shutDown();
		else {
			// Get previous lock screen state
			let screen_locked = localStorage.getItem('screen-locked');
			if (screen_locked !== null && screen_locked !== undefined) {
				this.setState({ screen_locked: screen_locked === 'true' ? true : false });
			}
		}

		// check recruiter mode
		let recruiter_mode = localStorage.getItem('recruiter-mode');
		if (recruiter_mode !== null && recruiter_mode !== undefined) {
			this.setState({ recruiter_mode: recruiter_mode === 'true' });
		}
	};

	lockScreen = () => {
		// google analytics
		ReactGA.send({ hitType: "pageview", page: "/lock-screen", title: "Lock Screen" });
		ReactGA.event({
			category: `Screen Change`,
			action: `Set Screen to Locked`
		});

		document.getElementById('status-bar').blur();
		setTimeout(() => {
			this.setState({ screen_locked: true });
		}, 100); // waiting for all windows to close (transition-duration)
		localStorage.setItem('screen-locked', true);
	};

	unLockScreen = () => {
		ReactGA.send({ hitType: "pageview", page: "/desktop", title: "Custom Title" });

		window.removeEventListener('click', this.unLockScreen);
		window.removeEventListener('keypress', this.unLockScreen);

		this.setState({ screen_locked: false });
		localStorage.setItem('screen-locked', false);
	};

	changeBackgroundImage = (img_name) => {
		this.setState({ bg_image_name: img_name });
		localStorage.setItem('bg-image', img_name);
	};

	changeDockPosition = (pos) => {
		this.setState({ dock_position: pos });
		localStorage.setItem('dock-position', pos);
	}

	changeUserName = (name) => {
		this.setState({ user_name: name });
		localStorage.setItem('user-name', name);
	}

	shutDown = () => {
		ReactGA.send({ hitType: "pageview", page: "/switch-off", title: "Custom Title" });

		ReactGA.event({
			category: `Screen Change`,
			action: `Switched off the Ubuntu`
		});

		document.getElementById('status-bar').blur();
		this.setState({ shutDownScreen: true });
		localStorage.setItem('shut-down', true);
	};

	turnOn = () => {
		ReactGA.send({ hitType: "pageview", page: "/desktop", title: "Custom Title" });

		this.setState({ shutDownScreen: false, booting_screen: true });
		this.setTimeOutBootScreen();
		localStorage.setItem('shut-down', false);
		localStorage.setItem('shut-down', false);
	};

	toggleRecruiterMode = () => {
		const newMode = !this.state.recruiter_mode;
		this.setState({ recruiter_mode: newMode });
		localStorage.setItem('recruiter-mode', newMode);
		ReactGA.event({
			category: `Recruiter Mode`,
			action: newMode ? `Enabled Recruiter Mode` : `Disabled Recruiter Mode`
		});
	}

	render() {
		return (
			<div className="w-screen h-screen overflow-hidden" id="monitor-screen">
				{this.state.recruiter_mode ? (
					<RecruiterMode toggleRecruiterMode={this.toggleRecruiterMode} />
				) : (
					<>
						<LockScreen
							isLocked={this.state.screen_locked}
							bgImgName={this.state.bg_image_name}
							unLockScreen={this.unLockScreen}
						/>
						<BootingScreen
							visible={this.state.booting_screen}
							isShutDown={this.state.shutDownScreen}
							turnOn={this.turnOn}
						/>
						<Navbar
							lockScreen={this.lockScreen}
							shutDown={this.shutDown}
							user_name={this.state.user_name}
							toggleRecruiterMode={this.toggleRecruiterMode}
						/>
						<Desktop bg_image_name={this.state.bg_image_name}
							changeBackgroundImage={this.changeBackgroundImage}
							changeDockPosition={this.changeDockPosition}
							changeUserName={this.changeUserName}
							dock_position={this.state.dock_position}
							user_name={this.state.user_name}
						/>
					</>
				)}
			</div>
		);
	}
}
