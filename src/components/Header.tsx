import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logo, homeIcon, productsIcon, servicesIcon, testimonialsIcon, detailsIcon, contactIcon } from '../utils/data'; // Assuming these icons are imported

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

  const navItems = [
    { name: 'HOME', icon: homeIcon },
    { name: 'PRODUCTS', icon: productsIcon },
    { name: 'SERVICES', icon: servicesIcon },
    { name: 'TESTIMONIALS', icon: testimonialsIcon },
    { name: 'DETAILS', icon: detailsIcon },
    { name: 'CONTACT', icon: contactIcon }
  ];

  return (
    <header className="bg-white text-black fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex-1 flex justify-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none transition transform hover:scale-105 duration-300"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Main Navigation - Hidden on small screens */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name.toLowerCase().replace('-', ''))}
              className="group flex flex-col items-center text-gray-500 hover:text-black transition duration-300"
            >
              <img src={item.icon} alt={item.name} className="h-6 w-6 mb-1 group-hover:scale-110 transition transform duration-200" />
              <span className="text-xs">{item.name}</span>
            </button>
          ))}
        </nav>

        {/* Mobile Navigation - Slide down menu */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
            <ul className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.name.toLowerCase().replace('-', ''))}
                    className="flex items-center space-x-3 text-gray-700 hover:bg-gray-200 p-2 rounded-md transition duration-300"
                  >
                    <img src={item.icon} alt={item.name} className="h-6 w-6" />
                    <span>{item.name}</span>
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
