"use client"

import React from 'react'
import { useState } from "react";
import Header from "../components/Header";
import HomePage from "@/components/HomePage";
import PreApp from "@/components/PreApp";
import About from "@/components/About"

export default function Home() {
  const [currentSection, setCurrentSection] = useState('home');

  return (
    <div className="items-center justify-items-center min-h-screen">
      <Header setSection={setCurrentSection} />
      {currentSection === 'home' && <HomePage />}
      {currentSection === 'preapp' && <PreApp />}
      {currentSection === 'about' && <About />}
    </div>
  );
}