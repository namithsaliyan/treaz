import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './components/About';
import AllReviews from './pages/AllReviews';
import WriteReview from './pages/WriteReview';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow bg-gradient-to-b from-purple-100 via-pink-100 to-blue-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/all-reviews" element={<AllReviews />} />
            <Route path="/write-review" element={<WriteReview />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

// {['Home', 'Products', 'About', 'Services', 'Contact', 'Social', 'Details', 'Testimonials', 'Write a Review'].map((item) => (
//   <li key=