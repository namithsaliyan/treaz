import React, { useState } from 'react';
import { bottlelogo } from '../utils/data';

const categories = [
  'All',
  'Weddings',
  'Conferences',
  'Events',
  'Hotels',
  'Healthcare'
];

const services = [
  { name: 'Custom Branded Bottle 1', image: bottlelogo, category: 'Weddings' },
  { name: 'Custom Branded Bottle 2', image: bottlelogo, category: 'Conferences' },
  { name: 'Custom Branded Bottle 3', image: bottlelogo, category: 'Events' },
  { name: 'Custom Branded Bottle 4', image: bottlelogo, category: 'Hotels' },
  { name: 'Custom Branded Bottle 5', image: bottlelogo, category: 'Healthcare' },
];

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory);

  return (
    <section id="services" >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-800">
          Our Services
        </h2>
        <p className="text-lg md:text-xl text-center mb-12 text-gray-700 max-w-3xl mx-auto">
          We specialize in customizing packed water with your own brand for a unique touch. 
          Enhance your brand visibility and offer a personalized experience to your customers.
        </p>
        
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 m-1 rounded-lg font-medium transition-colors duration-300 ${selectedCategory === category ? 'bg-indigo-800 text-white' : 'bg-white text-indigo-800 border border-indigo-800'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style>{`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex space-x-6 md:space-x-8 min-w-max">
            {filteredServices.map((service, index) => (
              <div key={index} className="w-64 md:w-80 flex-shrink-0 mb-6">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
                  <img 
                    src={service.image} 
                    alt={service.name} 
                    className="w-full h-32 md:h-48 object-cover mb-4 rounded"
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