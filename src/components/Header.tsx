import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../utils/data';

const navigationItems = [
  'HOME', 'PRODUCTS', 'SERVICES', 'TESTIMONIALS', 'DETAILS', 'CONTACT'
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="Company Logo" className="h-12 w-auto transition-transform duration-300 ease-in-out transform group-hover:scale-105" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-3 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8 font-sans font-semibold text-lg">
              {navigationItems.map(item => (
                <li key={item} className="relative group">
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="hover:text-yellow-400 transition-colors duration-300"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed top-16 left-0 w-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
          <nav className="mt-4">
            <ul className="flex flex-col space-y-2 font-sans font-semibold text-lg">
              {navigationItems.map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="block py-4 px-6 hover:bg-gray-700 rounded-md transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
