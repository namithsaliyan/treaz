import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className=" ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-MontBold mb-8 text-center font-MontBold from-purple-100  text-blue-800">
          About Us
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl text-center max-w-3xl mx-auto font-MontRegular">
          Our water is sourced from the purest springs, offering a unique taste that is both crisp and refreshing. We are committed to sustainability and use eco-friendly packaging for all our products.
        </p>
      </div>
    </section>
  );
};

export default About;
