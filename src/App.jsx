import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ResumeDropdown from './components/ResumeDropdown'

function App() {
  return (
    <div className="min-h-screen">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 text-black">
            <a href="#home" className="hover:text-blue-600">Home</a>
    	      <span className="font-medium text-base">Hi! I'm Vardaan Kapoor</span>
          </div>

          {/* Nav Links */}
          <ul className="flex items-center space-x-6">
            <li><a href="#experiences" className="hover:text-blue-600">Experiences</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
            <li><ResumeDropdown /></li>
          </ul>
        </div>
      </nav>

      {/* Add padding so content isn’t hidden behind the fixed nav */}
      <div className="pt-20">
        <Hero />
        <main className="max-w-6xl mx-auto px-6">
          <Experiences />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;

