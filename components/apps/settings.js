import React, { useState, useEffect } from 'react';
import $ from 'jquery';

export function Settings(props) {
    const [activeTab, setActiveTab] = useState("Background");
    const [dockPos, setDockPos] = useState("left");
    const [userName, setUserName] = useState("Guest");

    useEffect(() => {
        // Sync initial state from local storage or props
        const savedDock = localStorage.getItem('dock-position');
        if (savedDock) setDockPos(savedDock);

        const savedUser = localStorage.getItem('user-name');
        if (savedUser) setUserName(savedUser);
    }, []);

    const wallpapers = {
        "wall-1": "./images/wallpapers/wall-1.webp",
        "wall-2": "./images/wallpapers/wall-2.webp",
        "wall-3": "./images/wallpapers/wall-3.webp",
        "wall-4": "./images/wallpapers/wall-4.webp",
        "wall-5": "./images/wallpapers/wall-5.webp",
        "wall-6": "./images/wallpapers/wall-6.webp",
        "wall-7": "./images/wallpapers/wall-7.webp",
        "wall-8": "./images/wallpapers/wall-8.webp",
        "coding-1": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=3840&auto=format&fit=crop",
        "abstract-1": "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=3840&auto=format&fit=crop",
        "city-1": "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=3840&auto=format&fit=crop",
        "nature-1": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=3840&auto=format&fit=crop",
        "setup-1": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=3840&auto=format&fit=crop",
        "dark-1": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=3840&auto=format&fit=crop",
        "cyber-1": "https://images.unsplash.com/photo-1535378437323-952a8d9bf5c2?q=80&w=3840&auto=format&fit=crop",
    };

    const changeBackgroundImage = (e) => {
        props.changeBackgroundImage($(e.target).data("path"));
    }

    const handleDockChange = (pos) => {
        setDockPos(pos);
        if (props.changeDockPosition) props.changeDockPosition(pos);
    }

    const handleUserChange = (e) => {
        const newName = e.target.value;
        setUserName(newName);
        if (props.changeUserName) props.changeUserName(newName);
    }

    const renderBackground = () => (
        <div className="flex flex-wrap justify-center items-start overflow-y-auto h-full p-4">
            <div className="w-full mb-4 text-center">
                <div className="mx-auto w-2/3 md:w-1/2 h-48 md:h-64 rounded-lg shadow-lg border-4 border-white transition-all duration-300"
                    style={{ backgroundImage: `url(${wallpapers[props.currBgImgName]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                </div>
                <p className="mt-2 text-sm text-gray-400">Current Wallpaper</p>
            </div>

            {Object.keys(wallpapers).map((name, index) => (
                <div key={index} tabIndex="1" onFocus={changeBackgroundImage} data-path={name}
                    className={((name === props.currBgImgName) ? " border-ub-orange scale-105 " : " border-transparent hover:scale-105 ") + " m-2 cursor-pointer transition-all duration-200 outline-none border-4 border-opacity-80 w-24 h-24 md:w-32 md:h-32 rounded-lg shadow-md"}
                    style={{ backgroundImage: `url(${wallpapers[name]})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center center" }}>
                </div>
            ))}
        </div>
    );

    const renderAppearance = () => (
        <div className="flex flex-col items-center justify-start h-full p-8 space-y-8 w-full">
            <div className="w-full max-w-md">
                <h3 className="text-xl font-bold mb-4 text-left">Dock Position</h3>
                <div className="flex space-x-4 bg-ub-cool-grey p-2 rounded-lg">
                    {["left", "bottom", "right"].map((pos) => (
                        <button key={pos} onClick={() => handleDockChange(pos)}
                            className={`flex-1 py-2 capitalize rounded-md transition-colors duration-200 ${dockPos === pos ? "bg-ub-orange text-white shadow-md" : "hover:bg-white hover:bg-opacity-10 text-gray-300"}`}>
                            {pos}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full max-w-md opacity-50 pointer-events-none">
                <h3 className="text-xl font-bold mb-4 text-left">Theme (Coming Soon)</h3>
                <div className="flex space-x-4">
                    <div className="w-8 h-8 rounded-full bg-white cursor-pointer"></div>
                    <div className="w-8 h-8 rounded-full bg-gray-900 border border-white cursor-pointer"></div>
                </div>
            </div>
        </div>
    );

    const renderUsers = () => (
        <div className="flex flex-col items-center justify-center h-full p-8 w-full">
            <div className="w-24 h-24 bg-ub-orange rounded-full flex items-center justify-center text-4xl text-white font-bold mb-6 shadow-lg">
                {userName.charAt(0).toUpperCase()}
            </div>
            <div className="w-full max-w-xs">
                <label className="block text-sm font-medium text-gray-400 mb-2">User Name</label>
                <input type="text" value={userName} onChange={handleUserChange}
                    className="w-full bg-ub-cool-grey border border-black rounded-lg px-4 py-2 focus:outline-none focus:border-ub-orange text-center text-lg" />
            </div>
        </div>
    );

    const renderAbout = () => (
        <div className="flex flex-col items-center justify-center h-full p-8 w-full select-text">
            <div className="flex flex-col items-center mb-8">
                <img src="./themes/Yaru/status/cof_orange_hex.svg" alt="Ubuntu Logo" className="w-24 h-24 mb-4" />
                <h1 className="text-3xl font-ubuntu font-light text-gray-800 dark:text-gray-100">Ubuntu 22.04.4 LTS</h1>
            </div>

            <div className="bg-white bg-opacity-10 rounded-lg border border-gray-300 dark:border-gray-700 p-0 w-full max-w-lg shadow-sm">
                <table className="w-full text-sm text-gray-700 dark:text-gray-300">
                    <tbody>
                        <tr className="border-b border-gray-600 dark:border-gray-700">
                            <td className="py-2 px-4 font-bold w-1/3 text-right">Hardware Model</td>
                            <td className="py-2 px-4 text-left">Lenovo ThinkPad X1 Carbon Gen 10</td>
                        </tr>
                        <tr className="border-b border-gray-600 dark:border-gray-700">
                            <td className="py-2 px-4 font-bold w-1/3 text-right">Memory</td>
                            <td className="py-2 px-4 text-left">32.0 GiB</td>
                        </tr>
                        <tr className="border-b border-gray-600 dark:border-gray-700">
                            <td className="py-2 px-4 font-bold w-1/3 text-right">Processor</td>
                            <td className="py-2 px-4 text-left">12th Gen Intel® Core™ i7-1260P × 16</td>
                        </tr>
                        <tr className="border-b border-gray-600 dark:border-gray-700">
                            <td className="py-2 px-4 font-bold w-1/3 text-right">Graphics</td>
                            <td className="py-2 px-4 text-left">Mesa Intel® Graphics (ADL GT2)</td>
                        </tr>
                        <tr className="border-b border-gray-600 dark:border-gray-700">
                            <td className="py-2 px-4 font-bold w-1/3 text-right">Disk Capacity</td>
                            <td className="py-2 px-4 text-left">1.0 TB</td>
                        </tr>
                        <tr className="border-b border-gray-600 dark:border-gray-700">
                            <td className="py-2 px-4 font-bold w-1/3 text-right">OS Name</td>
                            <td className="py-2 px-4 text-left">Ubuntu 22.04.4 LTS</td>
                        </tr>
                        <tr className="border-b border-gray-600 dark:border-gray-700">
                            <td className="py-2 px-4 font-bold w-1/3 text-right">OS Type</td>
                            <td className="py-2 px-4 text-left">64-bit</td>
                        </tr>
                        <tr className="border-b border-gray-600 dark:border-gray-700">
                            <td className="py-2 px-4 font-bold w-1/3 text-right">GNOME Version</td>
                            <td className="py-2 px-4 text-left">42.9</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 font-bold w-1/3 text-right">Windowing System</td>
                            <td className="py-2 px-4 text-left">Wayland</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="mt-8 flex space-x-4">
                <button className="px-4 py-1.5 bg-ub-grey hover:bg-gray-700 border border-gray-500 rounded text-sm transition-colors">Software Updates</button>
            </div>
        </div>
    );

    return (
        <div className={"w-full flex h-full windowMainScreen select-none bg-ub-grey text-white relative"}>
            {/* Sidebar */}
            <div className="w-1/4 md:w-1/5 h-full bg-ub-cool-grey flex flex-col pt-4 border-r border-black border-opacity-50">
                {["Background", "Appearance", "Users", "About"].map((tab) => (
                    <div key={tab} onClick={() => setActiveTab(tab)}
                        className={`px-4 py-3 cursor-pointer transition-colors duration-100 flex items-center ${activeTab === tab ? "bg-ub-orange text-white" : "hover:bg-white hover:bg-opacity-5 text-gray-300"}`}>
                        <span className="font-medium">{tab}</span>
                    </div>
                ))}
            </div>

            {/* Content Area */}
            <div className="w-3/4 md:w-4/5 h-full bg-ub-grey relative overflow-hidden">
                {activeTab === "Background" && renderBackground()}
                {activeTab === "Appearance" && renderAppearance()}
                {activeTab === "Users" && renderUsers()}
                {activeTab === "About" && renderAbout()}
            </div>
        </div>
    )
}

export default Settings

export const displaySettings = () => {
    return <Settings> </Settings>;
}
