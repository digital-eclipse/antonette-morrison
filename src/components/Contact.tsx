"use client"

import React from 'react';
import Image from 'next/image';
import Footer from './Footer';

interface ContactProps {
  setSection: (section: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setSection }) => {

    return (
        <div className='w-full lg:h-[120vh] h-[100vh]'>
            
            {/* Contact Me */}
            <div className='w-full lg:h-[110vh] lg:px-[60vh] lg:mt-[15vh] flex pt-[10vh] flex-col justify-center items-center bg-white text-bold '>
                {/* Title Div */}
                <div className='font-bold lg:w-[200vh] text-5xl text-center lg:mt-[14vh] mt-[11vh] mb-[5vh]'>
                    Contact Me
                </div>
                {/* Body Div */}
                <div className=' lg:w-full w-[50vh] flex flex-col lg:flex-row justify-center items-center '>
                        
                {/* BG Color Div */}
                <div className='justify-center items-center lg:w-[215vh] w-[48vh] lg:px-[20vh] lg:h-[60vh] h-[92vh] rounded-2xl bg-[#ffe5ec] flex flex-col lg:flex-row'>
                        {/* Immediate Contact Div */}              
                        <div className=' h-[50vh] lg:mt[2vh] my-[5vh] lg:mr-[20vh] w-[60vh]'>
                            <p className=' font-bold text-4xl text-center whitespace-nowrap  lg:mt-[30px] mb-[5vh]'>
                                Immediate Contact 
                            </p>
                            <p className='text-xl lg:text-left text-center lg:mx-[2vh] mx-[10vh] '>
                            If you have an inquiry that you need answers for right now feel free to contact me at either my email or my phone number. I am available from 10AM to 8PM EST everyday. If I miss your call please leave a voicemail so I can get back to you ASAP.  
                            </p>
                        </div>
                        <div className='flex lg:flex-row flex-col justify-center items-center '>
                        {/* Buttons List */}
                            <div className='mb-[4vh]'>

                                <button onClick={() => 
                                    window.location.href = 'mailto:antonette@antonettemorrison.com'} 
                                    className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] m-[2vh] lg:ml-[8.5vh] ml-[9.5vh] rounded hover:bg-gray-800 transition duration-300"
                                >
                                    Email Me
                                </button>

                                <p className='text-xl mb-[2vh] lg:text-left text-center'>
                                    Antonette@antonettemorrison.com
                                </p>
                                <button
                                    onClick={() => window.location.href = 'tel:+16475688772'}
                                    className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] mb-[2vh] lg:ml-[9.5vh] ml-[10.5vh] rounded hover:bg-gray-800 transition duration-300"
                                >
                                    Call Me
                                </button>
                                <p className='text-3xl mb-[2vh] text-center'>
                                    (647) - 568 - 8772
                                </p >
                                <button
                                    onClick={() => window.location.href = 'https://www.google.com/maps/place/Get+A+Better+Mortgage/@43.6277066,-79.4997886,17z/data=!3m1!4b1!4m6!3m5!1s0x882b363ebfc8f92b:0xe04f533141a556a6!8m2!3d43.6277066!4d-79.4972137!16s%2Fg%2F11cnc8z2ss?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'}
                                    className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] mb-[2vh] lg:ml-[8.5vh] ml-[10vh] rounded hover:bg-gray-800 transition duration-300"
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

                {/* Image Container */}
                <div className='flex justify-center items-center bg-white lg:w-[207vh]'>
                    <div className='relative w-[40vh] h-[40vh] lg:w-[60vh] lg:h-[53vh]'>
                        <Image
                            src='/images/calling.png'
                            alt='Antonette'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>

            </div>   
            <div className='lg:mt-[20vh] block sm:hidden'>  
                <Footer setSection={setSection} />  
            </div> 
        </div>

                                        

    );
}

export default Contact;
