import React from 'react';
import Banner from '../components/Banner';
import HomeProducts from '../components/HomeProducts';
import CustomizedBottle from '../components/CustomizedBottle';
import About from '../components/About';
import Services from '../components/Services';
import Details from '../components/Details';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden"> 
      <Banner />
      <section id="products" className="px-4 md:px-0">
        <HomeProducts />
      </section>
      <section id="custom-bottles" className="px-4 md:px-0">
        <CustomizedBottle />
      </section>
      <section id="services" className="px-4 md:px-0">
        <Services />
      </section>
      <section id="about" className="px-4 md:px-0">
        <About />
      </section>
      <section id="testimonials" className="px-4 md:px-0">
        <Testimonials />
      </section>
      <section id="details" className="px-4 md:px-0">
        <Details />
      </section>
      <section id="contact" className="px-4 md:px-0">
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;