import React from 'react';
import { bottlelogo } from '../utils/data';

const Services: React.FC = () => {
  const services = [
    { name: 'Custom Branded Bottle 1', image: bottlelogo },
    { name: 'Custom Branded Bottle 2', image: bottlelogo },
    { name: 'Custom Branded Bottle 3', image: bottlelogo },
    { name: 'Custom Branded Bottle 4', image: bottlelogo },
    { name: 'Custom Branded Bottle 5', image: bottlelogo },
  ];

  return (
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center  text-indigo-800">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-center mb-12 text-gray-700 max-w-3xl mx-auto">
          We specialize in customizing packed water with your own brand for a unique touch. 
          Enhance your brand visibility and offer a personalized experience to your customers.
        </p>
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-6 md:space-x-8 min-w-max">
            {services.map((service, index) => (
              <div key={index} className="w-64 md:w-80 flex-shrink-0">
                <div className="bg-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <p className="text-center text-lg font-semibold text-indigo-700">
                    {service.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;