import React from 'react';
import { Link } from 'react-router-dom';
import { bg } from '../utils/data';

const Banner: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      ></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-10"></div>
      
      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center items-center h-full text-center px-4 sm:px-6 lg:px-8">
        {/* Spacer to push button to the bottom */}
        <div className="flex-grow"></div>
        <Link
          to="/products"
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Shop Now
        </Link>
        <div className="mt-4 sm:mt-6"></div> {/* Adjust margin for spacing */}
      </div>
    </section>
  );
};

export default Banner;
