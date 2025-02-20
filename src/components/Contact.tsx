import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Correct import

const Contact = () => {
    return (
        <div className='w-full h-full'>
            
            {/* Contact Me */}
            <div className='w-full lg:h-[100vh] lg:px-[60vh] flex flex-col justify-center items-center bg-red-500 text-bold '>
                {/* Title Div */}
                <div className='bg-green-500 font-bold text-5xl lg:mt-[22vh] mt-[18vh] mb-[2vh]'>
                    Contact Me
                </div>
                {/* Body Div */}
                <div className=' w-full flex flex-col lg:flex-row justify-center items-center bg-yellow-800'>
                        
                        {/* Contact Info Div */}
                        <div className='lg:mx-[32vh] mx-[10vh]'>
                            <p className=' font-bold text-3xl text-center whitespace-nowrap lg:mx-[16vh] mb-[2vh]'>
                                Immediate Contact 
                            </p>
                            <p className='text-xl lg:text-left text-center '>
                            If you have an inquiry that you need answers for right now feel free to contact me at either my email or my phone number. I am available from 10AM to 8PM EST everyday. If I miss your call please leave a voicemail so I can get back to you ASAP.  
                            </p>
                        </div>
                        
                        {/* Immediate Contact List */}
                        <div className='w-full flex flex-col justify-center items-center bg-yellow-800'>
                            <div className='mx-[32vh]'>
                                <p className=' font-bold text-3xl lg:text-left text-center my-[2vh]'>
                                    Email 
                                </p>
                                <p className='text-xl mb-[2vh] lg:text-left text-center'>
                                    Antonette@antonettemorrison.com
                                </p>
                                <p className=' font-bold text-3xl mb-[2vh] lg:text-left text-center'>
                                    Phone 
                                </p>
                                <p className='text-xl mb-[2vh] lg:text-left text-center'>
                                    (647) - 568 - 8772
                                </p >
                                <p className=' font-bold text-3xl mb-[2vh] lg:text-left text-center'>
                                    Address 
                                </p>

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
        </div>
    );
}

export default Contact;
