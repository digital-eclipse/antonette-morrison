import React, { useState } from 'react';
import Image from 'next/image';

const Header = ({ setSection }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        // Main Div 
        <div className="z-50 fixed top-0 flex flex-row justify-between items-center h-[15vh] w-full bg-[#ffb5c9] shadow-md">

            {/* Logo Div - Visible on all screens */}
            <div className='flex items-center h-full pl-[5vh] lg:pl-[15vh]'>
                <div className="relative w-[22vh] h-[20vh]">
                    <Image
                        src='/images/newlogo.png'
                        alt='Antonette'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden pr-[5vh]">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="bg-transparent hover:bg-gray-500 hover:rounded-full transition-all duration-300"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Button Div - Visible on Large Screens */}
            <div className='hidden lg:flex items-center lg:flex-row'>
                <button onClick={() => setSection('home')} className="bg-black text-white text-2xl font-bold py-[1.5vh] px-[3vh] m-[1.5vh] rounded hover:bg-gray-800 transition duration-300">
                    Home
                </button>
                <button onClick={() => setSection('preapp')} className="bg-black text-white text-2xl font-bold py-[1.5vh] px-[3vh] m-[1.5vh] rounded hover:bg-gray-800 transition duration-300">
                    Pre-Approvals
                </button>
                <button onClick={() => setSection('about')} className="bg-black text-white text-2xl font-bold py-[1.5vh] px-[3vh] m-[1.5vh] rounded hover:bg-gray-800 transition duration-300">
                    About
                </button>
                <button className="bg-black text-white text-2xl font-bold py-[1.5vh] px-[3vh] m-[1.5vh] rounded hover:bg-gray-800 transition duration-300">
                    Testimonials
                </button>
                <button
                    onClick={() => setSection('contact')}
                    className="bg-black text-white text-2xl font-bold py-[1.5vh] px-[3vh] m-[1.5vh] mr-[5vh] rounded hover:bg-gray-800 transition duration-300"
                >
                    Contact
                </button>
            </div>

            {/* Mobile Menu - Visible on Small Screens */}
            {isMenuOpen && (
                <div className="lg:hidden absolute top-[15vh] w-full py-[2vh] bg-white shadow-lg flex flex-col items-center">
                    <button onClick={() => { setSection('home'); setIsMenuOpen(false); }} className="w-[90%] text-center bg-black text-white text-2xl font-bold py-[1.5vh] px-[3vh] my-[1.5vh] rounded hover:bg-gray-800 transition duration-300">
                        Home
                    </button>
                    <button onClick={() => { setSection('preapp'); setIsMenuOpen(false); }} className="w-[90%] text-center bg-black text-white text-2xl font-bold py-[1.5vh] px-[3vh] my-[1.5vh] rounded hover:bg-gray-800 transition duration-300">
                        Pre-Approvals
                    </button>
                    <button onClick={() => { setSection('about'); setIsMenuOpen(false); }} className="w-[90%] text-center bg-black text-white text-2xl font-bold py-[1.5vh] px-[3vh] my-[1.5vh] rounded hover:bg-gray-800 transition duration-300">
                        About
                    </button>
                    <button className="w-[90%] text-center bg-black text-white text-2xl font-bold py-[1.5vh] px-[3vh] my-[1.5vh] rounded hover:bg-gray-800 transition duration-300">
                        Testimonials
                    </button>
                    <button
                        onClick={() => { setSection('contact'); setIsMenuOpen(false); }}
                        className="w-[90%] text-center bg-black text-white text-2xl font-bold py-[1.5vh] px-[3vh] my-[1.5vh] rounded hover:bg-gray-800 transition duration-300"
                    >
                        Contact
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;