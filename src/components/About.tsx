"use client"

import React from 'react';
import Footer from './Footer';

// Define the type for the props
interface AboutProps {
  setSection: (section: string) => void;
}

const About: React.FC<AboutProps> = ({ setSection }) => {
  return (
    <div className='w-full h-full'>
      {/* Main Div */}
      <div className='w-full  lg:px-[60vh] flex flex-col justify-center items-center bg-white text-bold p-8'>
        {/* Title Div */}
        <div className='font-bold text-4xl sm:text-7xl mb-4'>
          About Me
        </div>
        {/* Body Div */}
        <div className=' bg-[#ffe5ec] p-[2vh] rounded-2xl mb-[3vh] sm:mx-[3vh] '>
          When I was 12 years old, my parents decided to migrate in Canada in hopes of a better future for my brothers and I. My father left behind his Engineering career in Saudi Arabia and joined his family-owned home renovation business here in Ontario. Growing up, I saw my parents work hard and my mom working 2 jobs to support us and her family in the Philippines. As we start over, for a few years we rented different homes in Markham and Scarborough while my parents tried best to save and hoping one day, they will own their own home.
          <br></br>
          <br></br>
          At the age of 15, barely legal to work part-time, I convinced the manager at a fast-food restaurant to hire me as a cashier. With the income I earned I gave it to my parents to help with home expenses and helped save for a down payment for a home. After many years of savings, my parents were able to afford to purchase their first home in Markham.
          <br></br>
          <br></br>
          Fast forward in my 20&apos;s, I decided to work at American Express for 14 years. In this job, I was able to learn the importance of great customer experience, provide credit counselling, resolving customer disputes, train and create incentives for the team. I&apos;m most grateful for Amex employee benefits that helped me save for my first home down payment, having my employer match my stocks and RRSP contributions.
          <br></br>
          <br></br>
          While I worked at the bank, I helped my husband run our hotdog cart business in Toronto. During the summer, we participated in all the street festivals in the city. Having the event set up in an outdoor environment, the weather can be challenging, and I&apos;ve seen and experienced how hard and difficult it is for small business owners to make money.
          <br></br>
          <br></br>
          In the year 2000, my dad was diagnosed with terminal stage 3 Colon cancer. This took a financial toll on my parents, where their mortgage agent at that time insisted they sell their home. My parents never defaulted on their mortgage payment, but their credit took a beating. The more the agent reminded my parents to sell, the more my parents fought to keep the house with the help of my brothers and myself. To this day, my mom still has her house, enjoying all the memories she had with dad.
          <br></br>
          <br></br>
          Currently, I am the training director at Atlantic (HS) Financial Corp. #10422 while I slowly build my team with agents. I hold a broker license M16000932 in both provinces of Ontario and Alberta. I love learning and sharing what I learn with others. Hearing other people&apos;s stories and collaborating with each client to find the right mortgage product and solution is priceless. I&apos;m passionate about helping my clients build wealth for their family and future generations. At Morr3 Solutions, we are the key to your home.
        </div>
      </div>

      {/* Accolades */}
      <div className='w-full lg:px-[60vh] flex flex-col justify-center items-center bg-[#ffe5ec] text-bold '>
        {/* Sticker Div */}
        <div className='bg-white m-[3vh] mt-[4vh] lg:w-[87.5vh] lg:px-[5vh] rounded-2xl p-[2vh] space-y-2'>
          {/* Title Div */}
          <div className='text-3xl sm:text-5xl font-bold'>
            My Accolades
          </div>
          {/* Body Div */}
          <div className='text-xl sm:text-3xl leading-relaxed font-bold'>
            <li> 2017 Atlantic (HS) Financial Corp. MVP </li>
            <li> 2018 Atlantic (HS) Financial Corp. Most <br></br>Improved Broker </li>
            <li> 2019 Atlantic (HS) Financial Corp. MVP </li>
            <li> 2021 Equitable Bank Top Performing Broker </li>
          </div>
        </div>
      </div>

      <div className='lg:mt-[20vh] block sm:hidden'>  
                <Footer setSection={setSection} />  
            </div> 
    </div>
  );
};

export default About;
