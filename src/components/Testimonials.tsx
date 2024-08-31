import React from 'react';
import { Link } from 'react-router-dom';

const Testimonials: React.FC = () => {
  const testimonials = [
    { text: "The customized water bottles from Treaz have made a big difference in our brand's presence. Our clients love the unique touch!", author: "Jane Doe, XYZ Company" },
    { text: "We've been using Treaz for our events, and the quality of their water and service is unmatched. Highly recommend!", author: "Frayan, Event Organizer" },
    { text: "The personalized water bottles were a huge hit at our conference. Treaz delivered on time and exceeded our expectations.", author: "Emily Johnson, Conference Planner" },
  ];

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-MontBold text-center mb-8 text-blue-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-gray-800">- {testimonial.author}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link
            to="/all-reviews"
            className="w-full sm:w-auto bg-purple-700 text-white font-MontBold py-3 px-8 rounded-full transform hover:scale-105 transition duration-300 text-center"
          >
            See All Reviews
          </Link>
          <Link
            to="/write-review"
            className="w-full sm:w-auto bg-white text-purple-700 font-MontBold py-3 px-8 rounded-full border border-purple-700 transform hover:scale-105 transition duration-300 text-center"
          >
            Write a Review
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;