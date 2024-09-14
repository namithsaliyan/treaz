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
    <header className="bg-gradient-to-r from-black to-green-900 text-white shadow-md fixed top-0 left-0 w-full z-50 mb-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="Logo" className="h-16 w-32" />
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <nav className="hidden md:block ">
            <ul className="flex space-x-8 font-MontBold">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigation(item.toLowerCase().replace('-', ''))}
                    className="hover:text-yellow-200 transition duration-300 text-md uppercase tracking-wide font-semibold relative overflow-hidden group"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-2 font-MontBold   ">
            <ul className="flex flex-col space-y-2 ">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigation(item.toLowerCase().replace('-', ''))}
                    className="block py-2 px-4 text-sm hover:bg-gray-800 rounded transition duration-300 hover:text-purple-400 w-full text-left"
                  >
                    {item}
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