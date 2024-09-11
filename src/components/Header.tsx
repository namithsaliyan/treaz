import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../utils/data';

const navigationItems = [
  { name: 'HOME', path: '/' },
  { name: 'PRODUCTS', path: '/products', isExternal: true },
  { name: 'SERVICES', path: '../components/Services' },
  { name: 'TESTIMONIALS', path: '../components/testimonials' },
  { name: 'DETAILS', path: '../components/details' },
  { name: 'CONTACT', path: '../components/contact' }
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prevState => !prevState);

  return (
    <header className="bg-gradient-to-r from-blue-900 via-purple-700 to-pink-600 text-white shadow-lg fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="logo">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="Company Logo" className="h-10 w-auto transition-transform transform group-hover:scale-110" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-opacity-30 hover:bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-4 font-semibold text-sm">
              {navigationItems.map(({ name, path, isExternal }) => (
                <li key={name}>
                  {isExternal ? (
                    <a
                      href={path}
                      className="relative group text-white hover:text-yellow-300 transition-colors duration-300 uppercase tracking-wide"
                    >
                      {name}
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-left"></span>
                    </a>
                  ) : (
                    <Link
                      to={path}
                      className="relative group text-white hover:text-yellow-300 transition-colors duration-300 uppercase tracking-wide"
                    >
                      {name}
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-yellow-300 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-bottom-left"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 font-semibold bg-white bg-opacity-90 text-black rounded-lg shadow-lg transition-transform transform translate-y-0 ease-in-out duration-300">
            <ul className="flex flex-col space-y-2 p-4">
              {navigationItems.map(({ name, path, isExternal }) => (
                <li key={name}>
                  {isExternal ? (
                    <a
                      href={path}
                      className="block py-2 px-4 text-base hover:bg-gray-200 rounded-lg transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {name}
                    </a>
                  ) : (
                    <Link
                      to={path}
                      className="block py-2 px-4 text-base hover:bg-gray-200 rounded-lg transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
