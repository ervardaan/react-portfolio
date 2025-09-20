import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <main className="max-w-6xl mx-auto px-6">
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
export default App;
