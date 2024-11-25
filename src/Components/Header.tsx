import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-gray-900 text-white px-6 py-4 fixed top-0 w-full z-50 shadow">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-red-500">
            Dream Dealer
          </NavLink>
        </div>
        <nav className="flex gap-8">
          <NavLink
            to="/cars"
            className={({ isActive }) =>
              `hover:text-red-500 ${isActive ? 'text-red-500' : ''}`
            }
          >
            Cars
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-red-500 ${isActive ? 'text-red-500' : ''}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              `hover:text-red-500 ${isActive ? 'text-red-500' : ''}`
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `hover:text-red-500 ${isActive ? 'text-red-500' : ''}`
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `hover:text-red-500 ${isActive ? 'text-red-500' : ''}`
            }
          >
            Register
          </NavLink>
        </nav>
        <NavLink
          to="/profile"
          className="hover:text-red-500"
          aria-label="Profile"
        >
          <FaUserCircle size={30} />
        </NavLink>
      </div>

      {/* Mobile Header */}
      <div className="flex justify-between items-center md:hidden">
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-red-500">
            Dream Dealer
          </NavLink>
        </div>
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="flex flex-col items-center bg-gray-800 text-white p-6 absolute top-16 left-0 w-full shadow-lg">
          <NavLink
            to="/cars"
            className="py-2 hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Cars
          </NavLink>
          <NavLink
            to="/about"
            className="py-2 hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contactus"
            className="py-2 hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/login"
            className="py-2 hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            className="py-2 hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Register
          </NavLink>
          <NavLink
            to="/profile"
            className="py-2 hover:text-red-500"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Profile"
          >
            Profile
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
