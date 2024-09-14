import React from 'react';
import { Link } from 'react-router-dom';
import { bg } from '../utils/data';

const Banner: React.FC = () => {
  // Determine the screen size
  const isMobile = window.innerWidth <= 768;
  const bgImage = isMobile
    ? 'https://www.pexels.com/photo/woman-drinking-water-from-glass-bottle-3124674/'
    : bg;

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-10"></div>
      
      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-end items-center h-full pb-12">
        {/* Button */}
        <Link
          to="/products"
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
