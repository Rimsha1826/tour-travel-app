import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive ? "text-blue-600 font-semibold" : "text-gray-700";

  return (
    <nav className="flex justify-between items-center px-4 md:px-6 py-4 bg-white shadow-md relative">
      <h1 className="text-2xl font-bold text-blue-600">TravelGo</h1>

      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6 font-medium">
        <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
        <li><NavLink to="/about" className={linkClass}>About</NavLink></li>
        <li><NavLink to="/service" className={linkClass}>Service</NavLink></li>
        <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
       
        <li><NavLink to="/signup" className={linkClass}>Sign Up</NavLink></li>
      </ul>

      {/* Hamburger icon - mobile only */}
      <button
        className="md:hidden text-2xl text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu - dropdown */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-4 md:hidden font-medium">
          <li>
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={linkClass} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/service" className={linkClass} onClick={() => setIsOpen(false)}>
              Service
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkClass} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </li>
          
          <li>
  <NavLink to="/signup" className={linkClass} onClick={() => setIsOpen(false)}>
    Sign Up
  </NavLink>
</li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;