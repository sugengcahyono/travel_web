import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Fungsi untuk menandai link yang aktif
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/" aria-label="Go to homepage">Travellweb</Link>
        </div>

        {/* Navigation Menu */}
        <ul className="flex gap-x-6 text-gray-700 font-medium list-none">
          <li>
            <Link 
              to="/home" 
              className={`hover:text-blue-600 ${isActive('/home') ? 'text-blue-600 font-semibold' : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/destinations" 
              className={`hover:text-blue-600 ${isActive('/destinations') ? 'text-blue-600 font-semibold' : ''}`}
            >
              Destinations
            </Link>
          </li>
          <li>
            <Link 
              to="/destination-highlight" 
              className={`hover:text-blue-600 ${isActive('/destination-highlight') ? 'text-blue-600 font-semibold' : ''}`}
            >
              Destination Highlight
            </Link>
          </li>
          <li>
            <Link 
              to="/blog" 
              className={`hover:text-blue-600 ${isActive('/blog') ? 'text-blue-600 font-semibold' : ''}`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={`hover:text-blue-600 ${isActive('/contact') ? 'text-blue-600 font-semibold' : ''}`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <Link
            to="/signin"
            className="text-gray-700 font-medium hover:text-blue-600 transition"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
