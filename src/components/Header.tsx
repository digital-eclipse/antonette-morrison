import React from 'react';

const Header = ({ setSection }) => {
    return (
        <div className="z-50 fixed top-0 flex flex-row justify-end items-center h-[15vh] w-full bg-white">
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
            <button className="bg-black text-white text-2xl font-bold py-[1.5vh] px-[3vh] m-[1.5vh] mr-[5vh] rounded hover:bg-gray-800 transition duration-300">
                Contact
            </button>
        </div>
    )
}

export default Header;
