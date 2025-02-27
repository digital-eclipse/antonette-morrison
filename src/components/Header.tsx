"use client";

import React, { useState } from "react";
import Image from "next/image";

// Define the type for the props
interface HeaderProps {
  setSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ setSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    // Main Header
    <header className="z-50 relative top-0 flex justify-between sm:justify-start items-center w-full bg-[#ffb5c9] shadow-md px-6 lg:px-16 py-3">
      {/* Logo Section */}
      <div className="flex items-center h-full">
        <div className="relative w-[25vw] h-[15vw] sm:w-[22vw] sm:h-[4vw] sm:max-w-[150px] sm:max-h-[80px]">
          <Image
            src="/images/newlogo.png"
            alt="Antonette"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="flex sm:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-transparent hover:bg-gray-500 p-2 rounded-full transition-all duration-300"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* currently no testimonials so render this button anohter time "Testimonials",*/}
      {/* Navigation (Desktop) */}
      <nav className="hidden sm:flex space-x-2">
        {["Home", "Pre-Approvals", "About", "Contact"].map(
          (label, index) => (
            <button
              key={index}
              onClick={() => setSection(label.toLowerCase().replace(" ", ""))}
              className="text-black text-md  py-2 px-6 rounded hover:scale-110 transition duration-300"
            >
              {label}
            </button>
          )
        )}
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[100%] inset-x-0 w-full bg-white shadow-lg flex flex-col items-center py-4 ">
          {["Home", "Pre-Approvals", "About", "Contact"].map(
            (label, index) => (
              <button
                key={index}
                onClick={() => {
                  setSection(label.toLowerCase().replace(" ", ""));
                  setIsMenuOpen(false);
                }}
                className="w-[90%] text-center bg-black text-white text-lg font-semibold py-3 my-2 rounded hover:bg-gray-800 transition duration-300"
              >
                {label}
              </button>
            )
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
