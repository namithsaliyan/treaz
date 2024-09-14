import React, { useState } from 'react';
import { banner } from '../utils/data';

const Products: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    bottleName: ''
  });
  const [message, setMessage] = useState('');

  const products = [
    { name: 'Natural Spring Water', size: '500ml', image: banner },
    { name: 'Still Mineral Water', size: '750ml', image: banner },
    { name: 'Sparkling Mineral Water', size: '1L', image: banner },
    { name: 'Sparkling Mineral Water', size: '1L', image: banner },
  ];

  const handleOrderClick = (productName: string) => {
    setSelectedProduct(productName);
    setIsPopupOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('Your order has been placed successfully!');
    setFormData({
      name: '',
      mobile: '',
      email: '',
      bottleName: ''
    });
    setIsPopupOpen(false);
  };

  const handleCancelOrder = () => {
    setIsPopupOpen(false);
    setFormData({
      name: '',
      mobile: '',
      email: '',
      bottleName: ''
    });
  };

  return (
    <section id="products" className="py-8 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb-8 text-center font-MontBold text-green-800">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-48 bg-green-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-42 h-full mx-auto object-contain"
                />
                <div className="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-bl-lg">
                  {product.size}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-MontSemibold mb-2 text-green-800 text-center">{product.name}</h3>
                <button 
                  onClick={() => handleOrderClick(product.name)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg relative">
            <h2 className="text-2xl font-MontBold mb-4 text-green-800">Order {selectedProduct}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  className="w-full border-gray-300 rounded-lg p-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  name="mobile" 
                  value={formData.mobile} 
                  onChange={handleChange} 
                  className="w-full border-gray-300 rounded-lg p-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="w-full border-gray-300 rounded-lg p-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="bottleName" className="block text-gray-700 font-medium mb-1">Name on the Bottle</label>
                <input 
                  type="text" 
                  id="bottleName" 
                  name="bottleName" 
                  value={formData.bottleName} 
                  onChange={handleChange} 
                  className="w-full border-gray-300 rounded-lg p-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Submit Order
              </button>
            </form>
            {message && <p className="mt-4 text-center text-green-600">{message}</p>}
            <button 
              onClick={handleCancelOrder}
              className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Cancel Order
            </button>
            <button 
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;