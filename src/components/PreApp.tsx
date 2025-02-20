import React from 'react';
import Image from 'next/image';

const PreApp = () => {
    return (
        // Main Div
        <div className='w-full h-full'>

            {/* PreApp Div */}
            <div className='flex flex-col lg:flex-row justify-center items-center h-auto lg:h-[100vh] w-full bg-blue-800 text-center text-xl md:text-2xl lg:text-4xl font-bold break-words p-4 space-y-5 lg:space-y-0'>

                {/* Text Div */}
                <div className='lg:w-[60%] w-[100%] text-base md:text-lg lg:text-xl'>
                    <h1 className=' p-[2vh] lg:mt[5vh] mt-[20vh] mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                        Contact Me <br />
                    </h1>      
                    <div className='text-left lg:truncate bg-green-500 p-4 rounded'>
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
                    </div>

                    <button className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] mt-[3vh] rounded hover:bg-gray-800 transition duration-300">
                        Apply Here
                    </button>
                </div>
            </div>
            {/* Fine Text Div */}
            <div className='px-[3vh] lg:h-[10vh] h-[22vh] w-full bg-red-500 text-center text-bold break-words'>
            By clicking 'Submit' within the application form, you authorize Atlantic (HS) Financial Corporation and 
            <br></br>its agents contact you electronically. It is understood that the purpose of this form is to collect
            <br></br> preliminary information, additional information will be required and you will be contacted 
            <br></br> by Atlantic (HS) Financial Corporation within 24 business hours
            </div>

            {/* Image Div */}
            <div className='flex flex-col justify-center items-center bg-orange-500 lg:p-0'>
                
                {/* Image Container */}
                <div className='relative w-[40vh] h-[40vh] lg:w-[50vh] lg:h-[30vh] lg:mt-[3vh]'>
                    <Image
                        src='/images/preapp1.png'
                        alt='Antonette'
                                    layout='fill'
                        objectFit='contain'
                    />
                </div>
            </div>
        </div>
    )
}

export default PreApp;