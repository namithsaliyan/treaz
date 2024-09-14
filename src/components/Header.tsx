import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logo } from '../utils/data';
import { FaHome, FaTag, FaCogs, FaStar, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const sectionId = (location.state as any).scrollTo;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      navigate('/', { replace: true, state: {} });
    }
  }, [location, navigate]);

  const navItems = [
    { name: 'HOME', icon: <FaHome /> },
    { name: 'PRODUCTS', icon: <FaTag /> },
    { name: 'SERVICES', icon: <FaCogs /> },
    { name: 'TESTIMONIALS', icon: <FaStar /> },
    { name: 'DETAILS', icon: <FaInfoCircle /> },
    { name: 'CONTACT', icon: <FaEnvelope /> },
  ];

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md sticky top-0 left-0 w-full z-50 mb-4 transition-transform duration-300 ease-in-out">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="Logo" className="h-12 w-24" />
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-transform transform duration-300 ease-in-out"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <nav className="hidden md:flex flex-grow justify-center">
            <ul className="flex space-x-6 font-bold text-lg">
              {navItems.map(({ name, icon }) => (
                <li key={name} className="group relative">
                  <button
                    onClick={() => handleNavigation(name.toLowerCase())}
                    aria-label={name}
                    className="flex items-center space-x-2 hover:text-yellow-300 transition-transform duration-300 ease-in-out relative"
                  >
                    <span className="text-xl">{icon}</span>
                    <span>{name}</span>
                    <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <ul className="flex flex-col space-y-2">
              {navItems.map(({ name, icon }) => (
                <li key={name} className="group relative">
                  <button
                    onClick={() => handleNavigation(name.toLowerCase())}
                    aria-label={name}
                    className="flex items-center space-x-2 px-4 py-2 text-sm hover:bg-gray-800 rounded transition-transform duration-300 ease-in-out"
                  >
                    <span className="text-lg">{icon}</span>
                    <span>{name}</span>
                  </button>
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
