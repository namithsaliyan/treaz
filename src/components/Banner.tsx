import React from 'react';
import { Link } from 'react-router-dom';
import { bg } from '../utils/data';

const Banner: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden mt-0 pt-0">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bg})` }}
      ></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-10"></div>
      
      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full">
        {/* Spacer to push button to the bottom */}
        <div className="flex-grow"></div>
        <Link
          to="/products"
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Shop Now
        </Link>
        <div className="mt-6"></div> {/* Optional margin for spacing */}
      </div>
    </section>
  );
};

export default Banner;
