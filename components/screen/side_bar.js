import React, { useState } from 'react'
import SideBarApp from '../base/side_bar_app';

let renderApps = (props) => {
    let sideBarAppsJsx = [];
    props.apps.forEach((app, index) => {
        if (props.favourite_apps[app.id] === false) return;
        sideBarAppsJsx.push(
            <SideBarApp key={index} id={app.id} title={app.title} icon={app.icon} isClose={props.closed_windows} isFocus={props.focused_windows} openApp={props.openAppByAppId} isMinimized={props.isMinimized} openFromMinimised={props.openFromMinimised} />
        );
    });
    return sideBarAppsJsx;
}


export default function SideBar(props) {

    function showSideBar() {
        props.hideSideBar(null, false);
    }

    function hideSideBar() {
        setTimeout(() => {
            props.hideSideBar(null, true);
        }, 2000);
    }

    let dockSide = props.dock_position || "left";

    let containerClass = "absolute transform duration-300 select-none z-40 flex border-black border-opacity-60 bg-black bg-opacity-50 ";
    let triggerClass = "absolute bg-transparent z-50 ";
    let allAppsStyle = {};

    if (dockSide === "bottom") {
        containerClass += "left-0 bottom-0 w-full h-auto flex-row justify-center items-center pb-2 pt-2 ";
        containerClass += (props.hide ? "translate-y-11" : ""); // approx height
        triggerClass += "w-full h-1 bottom-0 left-0";
        allAppsStyle = { marginLeft: '10px' };
    } else if (dockSide === "right") {
        containerClass += "right-0 top-0 h-full w-auto flex-col justify-start items-center pt-7 ";
        containerClass += (props.hide ? "translate-x-full" : "");
        triggerClass += "w-1 h-full top-0 right-0";
        allAppsStyle = { marginTop: 'auto' };
    } else { // default left
        containerClass += "left-0 top-0 h-full w-auto flex-col justify-start items-center pt-7 ";
        containerClass += (props.hide ? "-translate-x-full" : "");
        triggerClass += "w-1 h-full top-0 left-0";
        allAppsStyle = { marginTop: 'auto' };
    }

    return (
        <>
            <div className={containerClass}>
                {
                    (
                        Object.keys(props.closed_windows).length !== 0
                            ? renderApps(props)
                            : null
                    )
                }
                <AllApps showApps={props.showAllApps} style={allAppsStyle} />
            </div>
            <div onMouseEnter={showSideBar} onMouseLeave={hideSideBar} className={triggerClass}></div>
        </>
    )
}

export function AllApps(props) {
    const [title, setTitle] = useState(false);
    return (
        <div
            className={`w-10 h-10 rounded m-1 hover:bg-white hover:bg-opacity-10 flex items-center justify-center`}
            style={props.style}
            onMouseEnter={() => {
                setTitle(true);
            }}
            onMouseLeave={() => {
                setTitle(false);
            }}
            onClick={props.showApps}
        >
            <div className="relative">
                <img width="28px" height="28px" className="w-7" src="./themes/Yaru/system/view-app-grid-symbolic.svg" alt="Ubuntu view app" />
                <div
                    className={
                        (title ? " visible " : " invisible ") +
                        " w-max py-0.5 px-1.5 absolute top-1 left-full ml-5 text-ubt-grey text-opacity-90 text-sm bg-ub-grey bg-opacity-70 border-gray-400 border border-opacity-40 rounded-md"
                    }
                >
                    Show Applications
                </div>
            </div>
        </div>
    );
}