import React from 'react';
import Banner from '../components/Banner';
import HomeProducts from '../components/HomeProducts';
import About from '../components/About';
import Services from '../components/Services';
import Details from '../components/Details';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <section id="home" className="pt-16"> {/* Adjust padding-top to prevent content from being hidden by header */}
        <Banner />
      </section>
      <section id="products" className="px-4 md:px-0 pt-16"> {/* Adjust padding-top to prevent content from being hidden by header */}
        <HomeProducts />
      </section>
      <section id="services" className="px-4 md:px-0 pt-8"> {/* Adjust padding-top to prevent content from being hidden by header */}
        <Services />
      </section>
      <section id="about" className="px-4 md:px-0 pt-16"> {/* Adjust padding-top to prevent content from being hidden by header */}
        <About />
      </section>
      <section id="testimonials" className="px-4 md:px-0 pt-16"> {/* Adjust padding-top to prevent content from being hidden by header */}
        <Testimonials />
      </section>
      <section id="details" className="px-4 md:px-0 pt-16"> {/* Adjust padding-top to prevent content from being hidden by header */}
        <Details />
      </section>
      <section id="contact" className="px-4 md:px-0 pt-16"> {/* Adjust padding-top to prevent content from being hidden by header */}
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
