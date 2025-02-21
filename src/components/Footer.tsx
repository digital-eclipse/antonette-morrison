"use client"

import React from 'react';

interface FooterProps {
  setSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setSection }) => {


  return (
    <div className='bg-[#ffb5c9] flex justify-center items-center w-full pb-[4vh]'>
      {/* Button to go back home */}
      <button
        onClick={() => setSection('home')}
        className="bg-black text-white text-3xl md:text-2xl font-bold py-[2vh] px-[10vh] mt-[5vh] rounded hover:bg-gray-800 transition duration-300"
      >
        Go Back Home
      </button>
    </div>
  );
};

export default Footer;