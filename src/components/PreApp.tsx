"use client"

import React from 'react';
import Image from 'next/image';
import Footer from './Footer';

interface PreAppProps {
  setSection: (section: string) => void;
}

const PreApp: React.FC<PreAppProps> = ({ setSection }) => {

    return (
        <div className='w-full sm:h-full'>

            {/* PreApp Div */}
            <div className='flex flex-col lg:flex-row justify-center sm:h-full items-center w-full bg-white text-center text-xl md:text-2xl lg:text-4xl font-bold break-words px-4 py-4 space-y-5 lg:space-y-0'>
                {/* Text Div */}
                <div className='lg:w-[60%] w-[100%] text-base md:text-lg lg:text-xl'>
                    <h1 className=' mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                        Pre-Approval Application & Consent Forms  <br />
                    </h1>

                    {/* Body div  */}
                    <div className='text-left bg-[#ffe5ec] p-8 mb-2 mx-4 rounded-2xl flex flex-col items-center'>
                        {/* Subtitle div */}
                        <div className='flex flex-row'>
                            <div className='space-y-4'>
                                <h1 className='text-2xl sm:text-3xl '>
                                    Why Use Me As Your Mortgage Broker?
                                </h1>   
                                <ul className='text-sm sm:text-lg space-y-1 font-medium'>
                                    <li> MLS (Purchasing) </li>
                                    <li> Purchase Sale Agreement (Purchasing) </li>
                                    <li> Three (3) months recent bank statement for proof of down payment </li>
                                    <li> Two (2) pieces of ID for each applicant </li>
                                    <li>MLS (Purchasing) </li>
                                    <li>Purchase Sale Agreement (Purchasing)</li>
                                    <li>Three (3) months recent bank statement for proof of down payment</li>
                                    <li>Two (2) pieces of ID for each applicant</li>
                                    <li>Current Mortgage Statement (Financial Institutions or Private Lender) for all properties owned</li>
                                    <li>Current Property Tax statement (from the city or municipality) for all properties owned</li>
                                    <li>Current Maintenance Fee statement</li>
                                    <li>Lease agreement for rental properties</li>
                                    <li>Employed Income - Letter of Employment, 2 recent paystubs, T4 or T4A statement, Notice of Assessment</li>
                                    <li>Self- Employed - Business License, Articles of Incorporation, Six (6) recent business bank statement</li>
                                </ul>
                            </div>
                            <div>
                                <div className='hidden sm:block relative w-[40vh] h-[40vh] lg:w-[20vw] lg:h-[20vw]'>
                                    <Image
                                        src='/images/preapp1.png'
                                        alt='Antonette'
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div className='w-full flex justify-end'>
                            <a href="https://velocity-client.newton.ca/en/client/journey/home?shortCode=1nwx6degvnj6n" className="bg-black text-white text-xl md:text-2xl lg:ml-[43vh] ml-[10vh] font-bold py-4 px-6 rounded hover:scale-110 transition duration-300">
                                Apply Here
                            </a>
                        </div>
                    </div>

                    {/* Fine Text Div */}
                    <div className='px-4 w-full bg-white text-left sm:text-center text-sm text-bold break-words'>
                        By clicking &apos;Submit&apos; within the application form, you authorize Atlantic (HS) Financial Corporation and 
                        <br></br>its agents contact you electronically. It is understood that the purpose of this form is to collect
                        <br></br> preliminary information, additional information will be required and you will be contacted 
                        <br></br> by Atlantic (HS) Financial Corporation within 24 business hours
                    </div>
                </div>
            </div>
            <div className=' lg:mt-[5vh] block sm:hidden'>  
                <Footer setSection={setSection} />  
            </div> 
        </div>
    )
}

export default PreApp;
