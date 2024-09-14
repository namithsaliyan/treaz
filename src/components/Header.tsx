import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHome, FaSearch, FaRegHeart, FaUserAlt } from 'react-icons/fa'; // Use Font Awesome icons
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

  const navItems = [
    { name: 'HOME', icon: <FaHome size={24} /> },
    { name: 'SEARCH', icon: <FaSearch size={24} /> },
    { name: 'NOTIFICATIONS', icon: <FaRegHeart size={24} /> },
    { name: 'PROFILE', icon: <FaUserAlt size={24} /> },
  ];

  return (
    <header className="bg-white border-b border-gray-300 fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-8 w-32" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.name.toLowerCase())}
              className="text-gray-700 hover:text-black transition-colors duration-300 relative group"
            >
              {item.icon}
              <span className="absolute top-full mt-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.name}
              </span>
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-md">
            <ul className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.name.toLowerCase())}
                    className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-300 hover:text-black"
                  >
                    {item.icon}
                    <span className="ml-2">{item.name}</span>
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
