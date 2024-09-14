import React from 'react';
import { Link } from 'react-router-dom';
import { bg } from '../utils/data';

const Banner: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ backgroundImage: `url(${bg})` }} 
      ></div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 z-10"></div>
      
      <div className="relative z-20 text-center px-4 sm:px-8 lg:px-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
          Experience the Essence of Pure Hydration
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-10 font-light leading-relaxed">
          Our mineral water is sourced from the finest natural springs, delivering a refreshing taste that quenches your thirst and rejuvenates your spirit.
        </p>
        
        <Link to="/products" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
