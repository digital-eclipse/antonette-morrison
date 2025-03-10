"use client"
import { Award } from 'lucide-react';
import React from 'react';



const About = () => {
  return (
    <div className='w-full sm:h-full bg-white flex flex-col justify-center items-center'>
      {/* Main Div */}
      <div className='sm:w-[80vw] flex flex-col justify-center items-center bg-white text-bold p-8 '>
        {/* Title Div */}
        <div className='font-bold text-4xl sm:text-7xl text-left w-full'>
          About Me
        </div>

        {/* Body Div */}
        <div className='flex flex-col sm:flex-row sm:space-x-4 w-full h-full space-y-4 sm:space-y-0'>
          <div className=' bg-[#ffe5ec] p-8 rounded-2xl w-full sm:w-3/4 text-lg'>
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

          <div className=' w-full sm:w-1/4 '>
            {/* Title Div */}
            {/* Body Div */}
            <div className='text-md sm:text-xl font-medium bg-[#ffe5ec] p-8 rounded-2xl'>
              <div className='flex flex-row items-center w-full justify-center gap-2 mb-4'>
                <Award className='w-12 h-12' />
                <Award className='w-12 h-12' />
                <Award className='w-12 h-12' />
                <Award className='w-12 h-12' />


              </div>
              <ul className='space-y-6'>
                <li className='flex items-center w-full flex-wrap'>
                  <p className='ml-4'>
                    2017 Atlantic (HS) Financial Corp. MVP 
                  </p>
                </li>
                <li className='flex items-center w-full flex-wrap'> 
                  <p className='ml-4'>
                    2018 Atlantic (HS) Financial Corp. Most Improved Broker 
                  </p>
                </li>
                <li className='flex items-center w-full flex-wrap'> 
                  <p className='ml-4'>
                    2019 Atlantic (HS) Financial Corp. MVP 
                  </p>
                </li>
                <li className='flex items-center w-full flex-wrap'> 
                  <p className='ml-4'>
                    2021 Equitable Bank Top Performing Broker 
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
