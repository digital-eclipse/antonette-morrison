"use client"

import React from 'react';
import Image from 'next/image';
import Footer from './Footer';

interface PreAppProps {
  setSection: (section: string) => void;
}

const PreApp: React.FC<PreAppProps> = ({ setSection }) => {

    return (
        <div className='w-full h-full'>

            {/* PreApp Div */}
            <div className='flex flex-col lg:flex-row justify-center items-center w-full  bg-white text-center text-xl md:text-2xl lg:text-4xl font-bold break-words p-4 space-y-5 lg:space-y-0'>

                {/* Text Div */}
                <div className='lg:w-[60%] w-[100%] text-base md:text-lg lg:text-xl'>
                    <h1 className=' p-[2vh] mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                        Pre-Approval Application & Consent Forms  <br />
                    </h1>

                    {/* Body div  */}
                    <div className='text-left bg-[#ffe5ec] p-[3vh] mb-[3vh] mx-[2vh] rounded-2xl'>
                        {/* Subtitle div */}
                        <h1 className='mx-[2vh] text-2xl sm:text-3xl md:text-2xl lg:text-4xl '>
                            Why Use Me As Your Mortgage Broker?
                        </h1>   
                        <ul>
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
                        <button className="bg-black text-white text-xl md:text-2xl lg:ml-[43vh] ml-[10vh] font-bold py-[2vh] px-[4vh] mt-[3vh] mb-[2vh] rounded hover:bg-gray-800 transition duration-300">
                            Apply Here
                        </button>
                    </div>

                    {/* Fine Text Div */}
                    <div className='px-[3vh] w-full bg-white text-center text-sm text-bold break-words'>
                        By clicking &apos;Submit&apos; within the application form, you authorize Atlantic (HS) Financial Corporation and 
                        <br></br>its agents contact you electronically. It is understood that the purpose of this form is to collect
                        <br></br> preliminary information, additional information will be required and you will be contacted 
                        <br></br> by Atlantic (HS) Financial Corporation within 24 business hours
                    </div>
                </div>
            </div>


            {/* Image Div */}
            <div className='flex flex-col justify-center items-center bg-white lg:p-0 min-h-[10vh]'>
                
                {/* Image Container */}
                <div className='relative w-[40vh] h-[40vh] lg:w-[50vh] lg:h-[30vh] lg:mt-[3vh] lg:mb-[3vh]'>
                    <Image
                        src='/images/preapp1.png'
                        alt='Antonette'
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>
            <div className=' lg:mt-[5vh] block sm:hidden'>  
                <Footer setSection={setSection} />  
            </div> 
        </div>
    )
}

export default PreApp;
