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
            {/* Main Div */}
            <div className='w-full lg:px-[60vh] h-full flex flex-col justify-center items-center bg-white text-bold p-8'>
                {/* Title Div */}
                <div className='font-bold  text-4xl sm:text-7xl text-center  mb-4'>
                    Contact Me
                </div>
                {/* Body Div */}
                <div className=' w-[80vw] flex flex-col lg:flex-row justify-center items-center'>
                        
                    {/* BG Color Div */}
                    <div className='justify-center items-center rounded-2xl bg-[#ffe5ec] flex flex-col h-full sm:flex-row p-4 sm:p-8'>
                            {/* Immediate Contact Div */}              
                            <div className=' sm:h-[50vh]  sm:w-[60vh]'>
                                <div className='hidden sm:flex justify-center items-center'>
                                    <div className='relative w-[15vw] h-[15vw] bg-white rounded-xl'>
                                        <Image
                                            src='/images/calling.png'
                                            alt='Antonette'
                                            layout='fill'
                                            objectFit='contain'
                                        />
                                    </div>
                                </div>
                                <p className='text-center font-bold text-2xl sm:text-4xl whitespace-nowrap  lg:mt-[30px] mb-4'>
                                    Immediate Contact 
                                </p>
                                <p className='text-lg sm:text-xl text-left sm:text-center'>
                                If you have an inquiry that you need answers for right now feel free to contact me at either my email or my phone number. I am available from 10AM to 8PM EST everyday. If I miss your call please leave a voicemail so I can get back to you ASAP.  
                                </p>
                            </div>
                            <div className='flex sm:flex-row flex-col justify-center items-center '>
                            {/* Buttons List */}
                                <div className='flex flex-col items-center justify-center'>

                                    <button onClick={() => 
                                        window.location.href = 'mailto:antonette@antonettemorrison.com'} 
                                        className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] m-[2vh] sm:ml-8 rounded hover:bg-gray-800 transition duration-300"
                                    >
                                        Email Me
                                    </button>

                                    <p className='text-xl mb-[2vh] lg:text-left text-center'>
                                        Antonette@antonettemorrison.com
                                    </p>
                                    <button
                                        onClick={() => window.location.href = 'tel:+16475688772'}
                                        className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] mb-[2vh] sm:ml-8 rounded hover:bg-gray-800 transition duration-300"
                                    >
                                        Call Me
                                    </button>
                                    <p className='text-3xl mb-[2vh] text-center'>
                                        (647) - 568 - 8772
                                    </p >
                                    <button
                                        onClick={() => window.location.href = 'https://www.google.com/maps/place/Get+A+Better+Mortgage/@43.6277066,-79.4997886,17z/data=!3m1!4b1!4m6!3m5!1s0x882b363ebfc8f92b:0xe04f533141a556a6!8m2!3d43.6277066!4d-79.4972137!16s%2Fg%2F11cnc8z2ss?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'}
                                        className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] mb-[2vh] sm:ml-8 rounded hover:bg-gray-800 transition duration-300"
                                    >
                                        Address
                                    </button>

                                    <p className='text-xl mb-[2vh] text-center'>
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
            </div>   
            <div className=' block sm:hidden'>  
                <Footer setSection={setSection} />  
            </div> 
        </div>

                                        

    );
}

export default Contact;
