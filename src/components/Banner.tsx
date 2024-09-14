import React from 'react';
import { Link } from 'react-router-dom';

const Banner: React.FC = () => {
  const isMobile = window.innerWidth <= 768;
  const bgImage = isMobile
    ? 'https://tse1.mm.bing.net/th?id=OIG1.jK5VIMmMZNBfSPOVQ0Yr&pid=ImgGn'
    : 'https://tse1.mm.bing.net/th?id=OIG1.jK5VIMmMZNBfSPOVQ0Yr&pid=ImgGn';

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-10"></div>
      
      <div className="relative z-20 flex flex-col items-center mt-20">
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
