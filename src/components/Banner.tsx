import React from 'react';
import { Link } from 'react-router-dom';
import { bg } from '../utils/data';
 
const Banner: React.FC = () => {
  const isMobile = window.innerWidth <= 768;
  const bgImage = isMobile
    ? bg
    : bg;

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden -my-2 "
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-10"></div>
      
      <div className="relative z-20 flex flex-col items-center mt-96">
        <Link
          to="/products"
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 font-MontBold text-white font-semibold py-4 text-xl px-8 rounded-2xl  focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
};

export default Banner;
