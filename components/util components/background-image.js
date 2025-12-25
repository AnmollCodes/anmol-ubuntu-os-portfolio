import React from 'react'

export default function BackgroundImage(props) {
    const bg_images = {
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

    // Check if the prop is a key in our map, otherwise assume it's a direct URL
    const bgUrl = bg_images[props.img] || props.img;

    return (
        <div style={{ backgroundImage: `url(${bgUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPositionX: "center" }} className="bg-ubuntu-img absolute -z-10 top-0 right-0 overflow-hidden h-full w-full">
        </div>
    )
}
