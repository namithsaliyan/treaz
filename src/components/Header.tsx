import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logo } from '../utils/data';

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
      // Clear the state to prevent scrolling on subsequent renders
      navigate('/', { replace: true, state: {} });
    }
  }, [location, navigate]);

  const navItems = ['HOME', 'PRODUCTS', 'SERVICES', 'TESTIMONIALS', 'DETAILS', 'CONTACT'];

  return (
    <header className="bg-white text-black shadow-md fixed top-0 left-0 w-full z-50 mb-4 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Center the logo for mobile */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center justify-center space-x-2 group">
            <img src={logo} alt="Logo" className="h-8 w-24 object-contain" />
          </Link>
        </div>

        {/* Hamburger Menu for mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
        >
          <svg className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 items-center font-MontBold text-sm uppercase">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavigation(item.toLowerCase().replace('-', ''))}
                  className="hover:text-gray-700 transition duration-300 text-md tracking-wide font-semibold relative group"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Instagram-like icons in the future */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Placeholder for potential future icons (like Instagram) */}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="md:hidden mt-2">
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavigation(item.toLowerCase().replace('-', ''))}
                  className="block py-2 px-4 text-sm hover:bg-gray-100 rounded transition duration-300 hover:text-gray-700 w-full text-left"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
