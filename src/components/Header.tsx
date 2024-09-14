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
      navigate('/', { replace: true, state: {} });
    }
  }, [location, navigate]);

  const navItems = ['HOME', 'PRODUCTS', 'SERVICES', 'TESTIMONIALS', 'DETAILS', 'CONTACT'];

  return (
    <header className="bg-white text-gray-900 shadow-md fixed top-0 left-0 w-full z-50 mb-4 transition-all duration-300 ease-in-out">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="logo">
            <Link to="/" className="flex items-center space-x-2 group">
              <img src={logo} alt="Logo" className="h-8 w-20 transition-transform duration-500 ease-in-out transform hover:scale-110" />
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <nav className="hidden md:flex space-x-4">
            <ul className="flex space-x-8 font-medium text-md">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigation(item.toLowerCase().replace('-', ''))}
                    className="hover:text-black transition duration-300 text-sm uppercase tracking-wide relative group"
                  >
                    {item}
                    <span className="block h-[2px] bg-black absolute left-0 bottom-0 w-0 group-hover:w-full transition-all duration-300"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-2 font-medium">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigation(item.toLowerCase().replace('-', ''))}
                    className="block py-2 px-4 text-sm hover:bg-gray-200 rounded transition duration-300 hover:text-black w-full text-left"
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
