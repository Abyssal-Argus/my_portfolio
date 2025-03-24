import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

const Cursor = () => {
    const cursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;

        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            gsap.to(cursor, {
                x: clientX - 10, // Adjust for the center of the cursor
                y: clientY - 10,
                duration: 0.5,
                ease: "power4.out",
            });
        };

        const handleMouseEnter = () => {
            gsap.to(cursor, {
                scale: 2, // Increase the scale
                duration: 0.3,
            });
        };

        const handleMouseLeave = () => {
            gsap.to(cursor, {
                scale: 1, // Reset the scale
                duration: 0.3,
            });
        };

        // Add event listeners to all clickable elements
        const clickableElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
        clickableElements.forEach((element) => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        // Add mousemove listener to the window
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            // Clean up event listeners
            window.removeEventListener("mousemove", handleMouseMove);
            clickableElements.forEach((element) => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            id="cursor"
            className='h-[20px] w-[20px] bg-white rounded-full z-50 fixed top-0 left-0 mix-blend-difference pointer-events-none transform scale-100'
            style={{ transformOrigin: 'center' }}
        ></div>
    );
};

export default Cursor;

//enter: npm i gsap, to use this component