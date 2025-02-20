import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'; // Correct import

const HomePage = ({ setSection }) => {
    return (
        // Main Div
        <div className='w-full h-full'>
            
            {/* Quick And Easy Div */}
            <motion.div className='flex flex-col justify-center items-center lg:h-[50vh] h-[40vh] w-full mt-[13vh] bg-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center'
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
            >
                <p>I make the mortgage process simple, <br className='hidden lg:block'></br>stress-free, quick and easy.</p>
                
                <button className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] mt-[5vh] rounded hover:bg-gray-800 transition duration-300">
                    Chat With Me
                </button>
            </motion.div>
            
            {/* Why Use Div */}
            <div className='flex flex-col lg:flex-row justify-center items-center lg:h-[80vh] h-[130vh] w-full bg-[#ffe5ec] text-center text-xl md:text-2xl lg:text-4xl font-bold break-words p-4 space-y-5 lg:space-y-0'>
                
                {/* Image Div */}
                <div className='flex flex-col justify-center items-center lg:mr-8 p-4 lg:p-0'>
                    
                    {/* Image Container */}
                    <div className='relative w-[40vh] h-[40vh] lg:w-[50vh] lg:h-[50vh]'>
                        <Image
                            src='/images/antonette.png'
                            alt='Antonette'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                    
                    <h1 className='mt-2 text-lg p-2 rounded'>
                        Broker License #M16000932 
                    </h1>   
                </div>

                {/* Text Div */}
                <div className='lg:w-[50%] text-base md:text-lg lg:text-xl bg-white p-[2vh] m-[1vh] rounded-2xl'>
                    <h1 className='m-[3vh] text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                        Why Use Me As <br /> Your Mortgage Broker?
                    </h1>           
                    <h3 className='text-left m-[0.5vh]'>
                        Canadian Mortgages have been constantly changing with rates frequently fluctuating in this competitive market.
                        As a licensed mortgage broker in the provinces of Ontario and Alberta,
                        I have helped many Canadians reach their home ownership goals.
                        Understanding my client's unique situations, combined with my 6+ years of experience in Mortgage Brokering and access to over 44 Banks,
                        Trust companies, Credit Unions, Private/MIC lenders and partners, I'm able to provide the right mortgage
                        solutions tailored to your needs and goals. I'm a true believer that for every problem there are infinite solutions.
                        I am conveniently available to answer your inquiries on weekdays, weekends, and evenings.
                    </h3>

                    <button onClick={() => setSection('about')} className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] my-[3vh] rounded hover:bg-gray-800 transition duration-300">
                        About Me
                    </button>
                </div>
            </div>

            {/* Info Div */}
            <div className='w-full text-left text-xl md:text-2xl lg:text-4xl font-bold break-words'>
                
                {/* Purchases Div */}
                <div className='flex lg:flex-row flex-col justify-center items-center min-h-[90vh] bg-white py-[4vh]'>
                    
                    {/* Text Div */}
                    <div className='lg:w-[35%] m-[3vh] bg-[#ffe5ec] bg-white p-[2vh] rounded-2xl text-base md:text-lg lg:text-xl'>
                        
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center lg:text-left'>
                            Purchases (Residential, Investments & Commercial)
                        </h1>           
                        
                        <h3 className='rounded'>
                            Purchasing a property whether it's your first home, investment/rental property or commercial property is likely the biggest financial purchase one could make in their life time. I'm committed to providing multiple mortgage options to New to Canada clients, First Time Home Buyers, Salaried, Self-employed or unstable income earners alike. To make this process easy and seamless, I provide the following services: 
                        </h3>
                        
                        {/* List Div */}
                        <div className='ml-[5vh]'>
                            <li>Pre-approval</li>
                            <li>Credit Counselling to improve credit scores</li>
                            <li>Best rate that match your monthly mortgage payment budget</li>
                        </div>

                        {/* Button Div */}
                        <div className='flex justify-center items-center'>
                            <button className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] my-[2vh] rounded hover:bg-gray-800 transition duration-300">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className='mx-[10vh] relative w-[40vh] h-[40vh] lg:w-[70vh] lg:h-[70vh]'>
                        <Image
                            src='/images/purchases.png'
                            alt='Antonette'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>

                {/* Refinancing Div */}
                <div className='flex lg:flex-row flex-col justify-center items-center lg:h-[80vh] bg-[#ffe5ec] py-[4vh]'>
                    
                    {/* Image Container */}
                    <div className='relative w-[40vh] h-[40vh] lg:w-[50vh] lg:h-[50vh]'>
                        <Image
                            src='/images/refinancing.png'
                            alt='Antonette'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>

                    {/* Text Div */}
                    <div className='lg:w-[35%] bg-white p-[3vh] rounded-2xl text-base md:text-lg lg:text-xl m-[3vh] lg:ml-[8vh]'>
                        
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                            Refinancing
                        </h1>           
                        
                        <h3 className='rounded'>
                            Refinance your mortgage before the maturity date and know some creative ways to make the equity in your home works for you.  
                        </h3>

                        {/* List Div */}
                        <div className='ml-[5vh]'>
                            <li>Consolidate debts at a lower rate, increase credit score and free up cash flow</li>
                            <li>Buy investment or rental properties</li>
                            <li>Remove co-signer or guarantor on title</li>
                            <li>Renovate your home and increase equity</li>
                            <li>Gift your child/ren down payment to purchase their own home</li>
                            <li>Pay for your children(s) college or university expenses</li>
                        </div>

                        {/* Button Div */}
                        <div className='flex justify-center items-center'>
                            <button className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] mt-[2vh] rounded hover:bg-gray-800 transition duration-300">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Heloc Div */}
                <div className='flex lg:flex-row flex-col justify-center items-center lg:h-[80vh] bg-white py-[4vh]'>
                    
                    {/* Text Div */}
                    <div className='lg:w-[35%] bg-[#ffe5ec] rounded-2xl p-[3vh] text-base md:text-lg lg:text-xl m-[3vh] lg:mr-[8vh]'>
                        
                        <h1 className='mt-4 mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                            HELOCs, 2nd and 3rd Mortgages
                        </h1>           
                        
                        <h3 className='rounded'>
                            If you urgently need to access funds, a HELOC, 2nd or 3rd mortgage could be the best solution. Accessing the equity in your property without breaking current low interest rate mortgage by adding a 2nd or 3rd mortgage for a short term period.                         
                        </h3>
                        
                        {/* List Div */}
                        <div className='ml-[5vh]'>
                            <li>HELOC - Home equity line of credit or Equity line Visa/Mastercard</li>
                            <li>Down payment for an investment property</li>
                            <li>Funds for business capital</li>
                        </div>

                        {/* Button Div */}
                        <div className='flex justify-center items-center'>
                            <button className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] mt-[2vh] rounded hover:bg-gray-800 transition duration-300">
                                Apply Now
                            </button>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className='relative w-[40vh] h-[40vh] lg:w-[50vh] lg:h-[50vh]'>
                        <Image
                            src='/images/heloc.png'
                            alt='Antonette'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>

                {/* Reverse Div */}
                <div className='flex lg:flex-row flex-col justify-center items-center lg:h-[80vh] min-h-[90vh] bg-[#ffe5ec] py-[4vh]'>
                    
                    {/* Image Container */}
                    <div className='relative w-[40vh] h-[40vh] lg:w-[70vh] lg:h-[70vh]'>
                        <Image
                            src='/images/reverse.png'
                            alt='Antonette'
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>

                    {/* Text Div */}
                    <div className='lg:w-[35%] bg-white rounded-2xl p-[3vh] lg:ml-[8vh] m-[3vh] text-base md:text-lg lg:text-xl'>
                        
                        <h1 className='mt-4 mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>
                            Reverse Mortgages 
                        </h1>           
                        
                        <h3 className='rounded'>
                            If you’re over the age of 55 and has build enough equity on your principal home, you maybe eligible for a reverse mortgage. This is a type of loan that is secured against your principal residence giving you financial solution to acces tax-free cash without monthly payment obligations.  
                            <br></br><br></br>Reverse mortgage gives the freedom to enjoy your golden years at your home and financially stress free. 
                        </h3>

                        {/* List Div */}
                        <div className='ml-[5vh]'>
                            <li>Continue to live in your home & will not be force to sell</li>
                            <li>Equity take out to pay for any medical bills or credit debts</li>
                            <li>Cover daily expenses</li>
                            <li>Home renovations</li>
                        </div>

                        {/* Button Div */}
                        <div className='flex justify-center items-center'>
                            <button className="bg-black text-white text-xl md:text-2xl font-bold py-[2vh] px-[4vh] mt-[2vh] rounded hover:bg-gray-800 transition duration-300">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;