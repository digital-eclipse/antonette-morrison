"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

interface FooterProps {
  setSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setSection }) => {
  return (
    <div className='bg-[#ffb5c9] flex justify-center items-center w-full pb-[4vh] '>
      {/* Footer Container */}
      <div className='flex flex-row'>
        {/* Buttons List (Visible only in desktop view) */}
        <div className='hidden md:flex flex-col items-start justify-center gap-2 lg:pr-[35vw]'>
          <div className='flex flex-row gap-2 items-center justify-between w-full'>
            <p className='text-sm sm:text-xl lg:text-left text-left flex flex-row items-center'>
              <Mail className='h-4 w-4 sm:h-6 sm:w-6 mr-2' /> Antonette@antonettemorrison.com
            </p>
            <button
              onClick={() => window.location.href = 'mailto:antonette@antonettemorrison.com'}
              className="flex justify-center items-center bg-black text-white text-xl md:text-2xl font-bold h-6 w-6 sm:h-10 sm:w-10 rounded hover:scale-110 transition duration-300"
            >
              <ArrowUpRight className='h-6 w-6 sm:h-6 sm:w-6 text-white' />
            </button>
          </div>
          <div className='flex flex-row gap-2 items-center justify-between w-full'>
            <p className='text-sm sm:text-xl text-left flex flex-row items-center'>
              <Phone className='h-4 w-4 sm:h-6 sm:w-6 mr-2' /> (647) - 568 - 8772
            </p>
            <button
              onClick={() => window.location.href = 'tel:+16475688772'}
              className="flex justify-center items-center bg-black text-white text-xl md:text-2xl font-bold h-6 w-6 sm:h-10 sm:w-10 rounded hover:scale-110 transition duration-300"
            >
              <ArrowUpRight className='h-6 w-6 text-white' />
            </button>
          </div>
          <div className='flex flex-row gap-2 items-center justify-between w-full'>
            <p className='text-sm sm:text-xl text-left flex flex-row items-center'>
              <MapPin className='h-4 w-4 sm:h-6 sm:w-6 mr-2' /> 642 The Queensway Main Floor
              <br />
              Toronto, Ontario MBY 1K5
            </p>
            <button
              onClick={() => window.location.href = 'https://www.google.com/maps/place/Get+A+Better+Mortgage/@43.6277066,-79.4997886,17z/data=!3m1!4b1!4m6!3m5!1s0x882b363ebfc8f92b:0xe04f533141a556a6!8m2!3d43.6277066!4d-79.4972137!16s%2Fg%2F11cnc8z2ss?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'}
              className="flex justify-center items-center bg-black text-white text-xl md:text-2xl font-bold h-6 w-6 sm:h-10 sm:w-10 rounded hover:scale-110 transition duration-300"
            >
              <ArrowUpRight className='h-6 w-6 text-white' />
            </button>
          </div>
        </div>

        {/* Digital Eclipse Watermark */}
        <div className="fourth-col lg:pr-[8vw] lg:pl-[10vh] w-[10vh] lg:h-[22vh] h-[10vh] flex justify-center items-center text-center lg:ml-[2vh] pt-[6vw]">
          <Link
            href="https://digitaleclipse.ca"
            className="ml-[20vh] flex flex-row bg-black text-deyellow text-lg font-bold py-2 px-6 rounded-lg ml-[2vh] shadow-md hover:scale-105 transition duration-300 ease-in-out"
            target='_blank'
          >
            <div className='lg:pt-[6vh] pt-[12vw] pr-[3vh] relative w-[5vh] h-[5vh] lg:w-[5vh] lg:h-[5vh]'>
              <Image
                src='/images/de-favicon.png'
                alt='Digital Eclipse'
                layout='fill'
                objectFit='contain'
              />
            </div>
            <div className="text-white pl-[1vh]">
              Website By DigitalEclipse.ca
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;