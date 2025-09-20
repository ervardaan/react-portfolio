// src/components/Navbar.jsx
import viteLogo from '../assets/vite.svg';
import reactLogo from '../assets/react.svg';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Left: Logos + Title */}
        <div className="flex items-center gap-3">
          <img src={viteLogo} alt="Vite logo" className="w-8 h-8" />
          <img src={reactLogo} alt="React logo" className="w-8 h-8" />
          <span className="font-bold text-lg">My Portfolio</span>
        </div>

        {/* Right: Navigation Links */}
        <ul className="flex items-center gap-6 list-none m-0 p-0">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
