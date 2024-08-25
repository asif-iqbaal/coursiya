import React, { useState } from 'react';
 // Import the CSS for animation

export default function HamburgerIcon() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div onClick={toggleMenu} className="flex items-center justify-center h-12 w-12 cursor-pointer">
            <div className={`hamburger ${isOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );
}
