import React, { useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

export default function ScrollTopButton() {
    const [visible, setVisible] = useState(false)
    const threshold = 180

    function toggleVisible() {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > threshold) {
            setVisible(true)
        }
        else if (scrolled <= threshold) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <button className='fixed bottom-3 right-[10px] bg-color5 text-white p-4 rounded-full text-3xl shadow-md active:text-color1' onClick={scrollToTop} style={{ display: visible ? 'block' : 'none' }}>
            <FaArrowCircleUp />
        </button>
    )
}
