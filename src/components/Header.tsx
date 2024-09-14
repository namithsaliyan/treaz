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
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div className="logo">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="h-12 w-12 object-contain" />
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300"
          >
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-lg font-medium">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigation(item.toLowerCase().replace('-', ''))}
                    className="text-white hover:text-pink-200 transition-all duration-300 uppercase tracking-wide font-semibold relative group"
                  >
                    <span className="relative z-10">{item}</span>
                    <span className="absolute bottom-0 left-0 h-0.5 w-full bg-pink-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out origin-left"></span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-2 text-center">
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNavigation(item.toLowerCase().replace('-', ''))}
                    className="block py-2 px-4 text-sm bg-purple-600 hover:bg-pink-500 rounded-md transition-all duration-300 text-white"
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
