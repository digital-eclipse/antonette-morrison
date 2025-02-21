"use client"

import React from 'react';
import Image from 'next/image';
import Footer from './Footer';

interface ContactProps {
  setSection: (section: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setSection }) => {

    return (
        <div className='w-full h-full'>
            
            {/* Contact Me */}
            <div className='w-full lg:h-[100vh] lg:px-[60vh] flex flex-col justify-center items-center bg-white text-bold '>
                {/* Title Div */}
                <div className='font-bold text-5xl lg:mt-[22vh] mt-[18vh] mb-[3vh]'>
                    Contact Me
                </div>
                {/* Body Div */}
                <div className=' lg:w-full w-[50vh] flex flex-col lg:flex-row justify-center items-center '>
                        
                        {/* BG Color Div */}
                        <div className='w-[48vh] h-[83vh] rounded-2xl bg-[#ffe5ec]'>
                        {/* Contact Info Div */}
                        <div className='lg:mx-[32vh]'>
                            <p className=' font-bold text-3xl text-center whitespace-nowrap lg:mx-[16vh] mt-[25px] mb-[2vh]'>
                                Immediate Contact 
                            </p>
                            <p className='text-xl lg:text-left text-center mx-[2vh] '>
                            If you have an inquiry that you need answers for right now feel free to contact me at either my email or my phone number. I am available from 10AM to 8PM EST everyday. If I miss your call please leave a voicemail so I can get back to you ASAP.  
                            </p>
                        </div>
                        
                        {/* Immediate Contact List */}
                    <div className='w-full flex flex-col justify-center items-center '>
                            <div className='mx-[32vh]'>

                                <button onClick={() => window.location.href = 'mailto:antonette@antonettemorrison.com'} className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] m-[2vh] ml-[9.5vh] rounded hover:bg-gray-800 transition duration-300">
                                    Email Me
                                </button>

                                <p className='text-xl mb-[2vh] lg:text-left text-center'>
                                    Antonette@antonettemorrison.com
                                </p>
                                <button
                                    onClick={() => window.location.href = 'tel:+16475688772'}
                                    className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] mb-[2vh] ml-[10.5vh] rounded hover:bg-gray-800 transition duration-300"
                                >
                                    Call Me
                                </button>
                                <p className='text-3xl mb-[2vh] lg:text-left text-center'>
                                    (647) - 568 - 8772
                                </p >
                                <button
                                    onClick={() => window.location.href = 'https://www.google.com/maps/place/Get+A+Better+Mortgage/@43.6277066,-79.4997886,17z/data=!3m1!4b1!4m6!3m5!1s0x882b363ebfc8f92b:0xe04f533141a556a6!8m2!3d43.6277066!4d-79.4972137!16s%2Fg%2F11cnc8z2ss?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'}
                                    className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] mb-[2vh] ml-[10vh] rounded hover:bg-gray-800 transition duration-300"
                                >
                                    Address
                                </button>

                                <p className='text-xl mb-[2vh] lg:text-left text-center'>
                                642 The Queensway Main Floor
                                <br></br>
                                Toronto, Ontario MBY 1K5
                                <br></br>
                                Franchise Lic. # 10874
                                </p>
                            </div>
                        </div>


                </div>
            </div>

                {/* Image Container */}
                <div className='relative w-[40vh] h-[40vh] lg:w-[50vh] lg:h-[50vh]'>
                    <Image
                        src='/images/calling.png'
                        alt='Antonette'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>

            </div>       
                
            <Footer setSection={setSection} />

        </div>
    );
}

export default Contact;
