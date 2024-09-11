import React from 'react';
import { Button } from '@/components/ui/button';

const Banner = () => {
  return (
    <section className="bg-[#b8e0d2] min-h-screen flex flex-col justify-start items-center p-8">
      <div className="w-full max-w-6xl flex justify-between items-center">
        <div className="flex-1">
          <img src="/api/placeholder/200/400" alt="Decorative water bottles" className="object-contain h-96" />
        </div>
        <div className="flex-1 text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            Welcome to TREAZ - Pure Drinking Water
          </h1>
          <p className="text-lg mb-6 text-gray-600 max-w-md mx-auto">
            Discover the finest water experience with TREAZ. Our mission is to provide 
            the purest and most refreshing drinking water to households and
          </p>
          <Button variant="secondary" className="bg-gray-800 text-white hover:bg-gray-700">
            Explore More
          </Button>
        </div>
        <div className="flex-1 flex justify-end">
          <img src="/api/placeholder/200/400" alt="Decorative water bottles" className="object-contain h-96" />
        </div>
      </div>
    </section>
  );
};

export default Banner;