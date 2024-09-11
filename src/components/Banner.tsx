import React from 'react';
import { Link } from 'react-router-dom';
import { bg } from '../utils/data';  

const Banner: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
      ></div>
      
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      
      <div className="relative z-20 text-center px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-MontBold mb-4 leading-tight transform transition-transform duration-500 hover:scale-105">
          Welcome to TREAZ.in - Pure Drinking Water
        </h1>
        <p className="text-lg sm:text-md md:text-xl lg:text-2xl mb-8 font-MontRegular transform transition-transform duration-500 hover:translate-y-1">
          Discover the finest water experience with TREAZ. Our mission is to provide the purest and most refreshing drinking water.
        </p>
        
        <Link to="/products" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded shadow-lg transition duration-300 transform hover:scale-110">
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
