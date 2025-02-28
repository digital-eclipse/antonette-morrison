"use client"

import React, { useEffect } from 'react'; // Import useEffect
import { useState } from "react";
import Header from "../components/Header";
import HomePage from "@/components/HomePage";
import PreApp from "@/components/PreApp";
import About from "@/components/About";
import Contact from '@/components/Contact';

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  // Scroll to the top whenever currentSection changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
    console.log("Current section changed to:", currentSection); // Log the new value
  }, [currentSection]); // Triggered when currentSection changes

  return (
<div className="flex flex-col items-center justify-items-center min-h-screen w-full">
    <Header setSection={setCurrentSection} />
      {currentSection === 'home' && <HomePage setSection={setCurrentSection}/>}
      {currentSection === 'pre-approvals' && <PreApp setSection={setCurrentSection}/>}
      {currentSection === 'about' && <About setSection={setCurrentSection}/>}
      {currentSection === 'contact' && <Contact setSection={setCurrentSection}/>}
    </div>
  );
}
