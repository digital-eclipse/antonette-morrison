"use client"

import React from 'react';
import Image from 'next/image';
import Footer from './Footer';
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
interface ContactProps {
  setSection: (section: string) => void;
}

const Contact: React.FC<ContactProps> = ({ setSection }) => {

    return (
        <div className='w-full h-full flex-col flex bg-white justify-between'>
            {/* Main Div */}
            <div className='w-full lg:px-[60vh] h-full flex flex-col justify-center items-center bg-white text-bold p-8'>
                {/* Title Div */}
                <div className='font-bold  text-4xl sm:text-7xl text-center  mb-4 '>
                    Contact Me
                </div>
                {/* Body Div */}
                <div className=' w-[80vw] flex flex-col lg:flex-row justify-center items-center'>
                        
                    {/* BG Color Div */}
                    <div className='w-full sm:w-auto justify-center items-center rounded-2xl bg-[#ffe5ec] flex flex-col h-full px-2 p-4 sm:p-8 space-y-8 '>
                            {/* Immediate Contact Div */}              
                            <div className=' sm:w-[25vw] space-y-4 '>
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
                                <p className='text-sm sm:text-lg text-left'>
                                For immediate inquiries, reach out via email or phone between 10AM and 8PM EST. Leave a voicemail if I miss you, and I&apos;ll respond promptly!
                                </p>
                            </div>
                            <div className='flex sm:flex-row flex-col justify-center items-center w-full'>
                            {/* Buttons List */}
                                <div className='flex flex-col items-start justify-center gap-2'>
                                    <div className='flex flex-row gap-2 items-center justify-between w-full'>

                                        <p className='text-sm sm:text-xl  lg:text-left text-left flex flex-row items-center'>
                                            <Mail className='h-4 w-4 sm:h-6 sm:w-6 mr-2'/> Antonette@antonettemorrison.com
                                        </p>
                                        <button onClick={() => 
                                            window.location.href = 'mailto:antonette@antonettemorrison.com'} 
                                            className=" flex justify-center items-center bg-black text-white text-xl md:text-2xl font-bold h-6 w-6 sm:h-10 sm:w-10  rounded hover:scale-110 transition duration-300"
                                        >
                                            <ArrowUpRight className='h-6 w-6 sm:h-6 sm:w-6 text-white'/>
                                        </button>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center justify-between w-full'>
                                        <p className='text-sm sm:text-xl  text-left flex flex-row items-center'>
                                            <Phone className='h-4 w-4 sm:h-6 sm:w-6 mr-2'/> (647) - 568 - 8772
                                        </p >
                                        <button
                                            onClick={() => window.location.href = 'tel:+16475688772'}
                                            className=" flex justify-center items-center bg-black text-white text-xl md:text-2xl font-bold h-6 w-6 sm:h-10 sm:w-10  rounded hover:scale-110 transition duration-300"
                                        >
                                                 <ArrowUpRight className='h-6 w-6 text-white'/>

                                        </button>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center justify-between w-full' >

                                        <p className='text-sm sm:text-xl  text-left flex flex-row items-center'>
                                        <MapPin className='h-4 w-4sm:h-6 sm:w-6 mr-2'/> 642 The Queensway Main Floor
                                        <br></br>
                                        Toronto, Ontario MBY 1K5
                                        </p>
                                        <button
                                            onClick={() => window.location.href = 'https://www.google.com/maps/place/Get+A+Better+Mortgage/@43.6277066,-79.4997886,17z/data=!3m1!4b1!4m6!3m5!1s0x882b363ebfc8f92b:0xe04f533141a556a6!8m2!3d43.6277066!4d-79.4972137!16s%2Fg%2F11cnc8z2ss?entry=ttu&g_ep=EgoyMDI1MDIxOC4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'}
                                            className=" flex justify-center items-center bg-black text-white text-xl md:text-2xl font-bold h-6 w-6 sm:h-10 sm:w-10  rounded hover:scale-110 transition duration-300"
                                        >
                                            <ArrowUpRight className='h-6 w-6 text-white'/>
                                        </button>
                                    </div>
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
