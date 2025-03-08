"use client";

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Thomas dela Cruz',
    review: "Antonette is a great mortgage professional to work with. She helped me in the refinance of our primary home and assisted me in the purchase of some of our rental properties. Very knowledgable, honest, and systematic. Highly, highly recommended.",
    stars: 5,
  },
  {
    id: 2,
    name: 'Reshaud Hussain',
    review: "Wonderful experience with Antonette! She is very thorough, patient and knowledgeable. Very reassuring and makes the process easy to understand. Definitely recommend!",
    stars: 5,
  },
  {
    id: 3,
    name: 'Christina Francis',
    review: "Antonette is a true professional and an expert in her field. She's reliable and will work tirelessly to meet your needs and exceed your expectations and I would recommend her services to anyone.",
    stars: 5,
  },
  {
    id: 4,
    name: 'Yama Niwand',
    review: "For anyone in need of a mortgage broker who truly cares and will deliver results with your best interest in mind, look no further than Antonette. She is a beacon of excellence in her field, and her commitment to her clients is both apparent and praiseworthy.",
    stars: 5,
  },
  {
    id: 5,
    name: 'Jingle Pilotin',
    review: 'Antonette is very knowledgeable in this field. She will explain in details, letting you know the pros and cons, and in the end help you find the best. I highly recommend her',
    stars: 5,
  },
  {
    id: 6,
    name: 'Bernice Chan',
    review: "Antonette is super knowledgeable and helps you every step of the way. Kind and very attentive. Definitely recommend for all your mortgage needs!",
    stars: 5,
  },
  {
    id: 7,
    name: 'Ariel Emengga',
    review: "Excellent service, made the process easy and stress-free. Highly recommend!",
    stars: 5,
  },
  {
    id: 8,
    name: 'Basil Khan',
    review: "Honest, trustworthy, reliable and knowledgeable!  Antonette is an amazing professional and goes above and beyond expectations!",
    stars: 5,
  },
  {
    id: 9,
    name: 'Mary Jean Cruz',
    review: "She is so nice and hard worker. She will explain to you every details of the process. I will highly recommend Antonette",
    stars: 5,
  },
];

// Duplicate testimonials for seamless looping
const duplicatedTestimonials = [...testimonials, ...testimonials];

const TestimonialsSlider = () => {
  const controls = useAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right'); // Track slide direction

  // Auto-scroll functionality for desktop
  useEffect(() => {
    let isMounted = true; // Track if the component is mounted

    const scroll = async () => {
      while (isMounted) {
        await controls.start({
          x: `-${100}%`, // Scroll by 100% of the container width
          transition: { duration: 110, ease: 'linear' }, // Smooth, continuous scroll
        });

        if (isMounted) {
          await controls.set({ x: 0 }); // Reset to the start without animation
        }
      }
    };

    scroll();

    // Cleanup function to stop the loop when the component unmounts
    return () => {
      isMounted = false;
    };
  }, [controls]);

  // Handle navigation to the previous card (mobile)
  const handlePrev = () => {
    setDirection('left'); // Set slide direction to left
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Handle navigation to the next card (mobile)
  const handleNext = () => {
    setDirection('right'); // Set slide direction to right
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="z-10 w-full flex flex-col items-center justify-center bg-white py-[2vw] px-[2vw] overflow-hidden">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
        What Our Clients Say
      </h2>

      {/* Desktop View: Smooth Scrolling Slider */}
      <div className="hidden md:block relative w-full overflow-hidden">
        <motion.div
          className="flex space-x-[2vw]" // Use vw for spacing between cards
          style={{
            width: `${duplicatedTestimonials.length * 20}vw`, // Adjust width for all cards
          }}
          animate={controls} // Use the animation controls
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.id}-${index}`} // Unique key for duplicated items
              className="flex-shrink-0 w-[20vw] h-[35vh] p-6 bg-[#ffe5ec] rounded-2xl shadow-lg flex flex-col justify-center items-center" // Use vw and vh for card dimensions
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Star Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-2xl">
                    ★
                  </span>
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-center text-lg sm:text-lg mb-4">
                {testimonial.review}
              </p>

              {/* Client Name */}
              <p className="text-xl font-semibold text-center">
                - {testimonial.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile View: Single Card with Arrows */}
      <div className="md:hidden w-full flex flex-row justify-center items-center pb-[6vw]">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="mr-[2vw] mt-[15%] transform -translate-y-1/2 bg-black text-white text-xl px-[2vw] py-[4vw] rounded-full hover:bg-gray-800 transition duration-300"
        >
          &lt;
        </button>

        {/* Testimonial Card */}
        <div className="relative w-[80vw] h-[50vh] p-6 bg-[#ffe5ec] rounded-2xl shadow-lg flex flex-col justify-center items-center overflow-hidden">
          <motion.div
            key={testimonials[currentIndex].id}
            initial={{ x: direction === 'right' ? 300 : -300, opacity: 0 }} // Slide in from the correct direction
            animate={{ x: 0, opacity: 1 }} // Slide to the center
            exit={{ x: direction === 'right' ? -300 : 300, opacity: 0 }} // Slide out in the opposite direction
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="w-full flex flex-col justify-center items-center"
          >
            {/* Star Rating */}
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500 text-2xl">
                  ★
                </span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-center text-lg sm:text-lg mb-4">
              {testimonials[currentIndex].review}
            </p>

            {/* Client Name */}
            <p className="text-xl font-semibold text-center">
              - {testimonials[currentIndex].name}
            </p>
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="ml-[2vw] mt-[15%] transform -translate-y-1/2 bg-black text-white text-xl px-[2vw] py-[4vw] rounded-full hover:bg-gray-800 transition duration-300"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;