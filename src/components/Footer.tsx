import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Correct import

const Footer = ({ setSection }) => {
    return (
        <div className=' bg-[#ffb5c9] flex justify-center items-center w-full pb-[4vh]'> 
            <button onClick={() => setSection('home')} className="bg-black text-white text-3xl md:text-2xl font-bold py-[2vh] px-[10vh] mt-[5vh] rounded hover:bg-gray-800 transition duration-300">
                    Go Back Home
                </button>
        </div>
    );
}

export default Footer;
