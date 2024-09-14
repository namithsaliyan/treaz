import React, { useState, useEffect } from 'react';
import { custombottle } from '../utils/data'; // Assuming the image is exported from data.tsx

const CustomizedBottle = () => {
  const [name, setName] = useState('');
  const [thought, setThought] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(image);
    } else {
      setPreviewImage('');
    }
  }, [image]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleOrderNow = () => {
    console.log('Order placed:', { name, thought, image });
  };

  return (
    <section className="py- ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-MontBold  mb-8 text-center text-blue-800">Customize Your Water Bottle</h2>
        <div className="flex flex-col md:flex-row items-start justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="w-full md:w-1/2 max-w-md">
            <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="thought" className="block text-sm font-medium text-gray-700 mb-1">Your Thought</label>
                <textarea
                  id="thought"
                  value={thought}
                  onChange={(e) => setThought(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter a short thought or message"
                />
              </div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={handleOrderNow}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                Order Now
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 max-w-md">
            <div className="relative w-64 mx-auto">
              {/* Bottle image */}
              <img src={custombottle} alt="Water Bottle" className="w-full h-auto" />
              
              {/* Customized content overlay */}
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center w-full px-4">
                <p className="text-xl font-bold text-green-500 mb-2">{name}</p>
                <p className="text-sm text-yellow-400 mb-4">{thought}</p>
                {previewImage && (
                  <img
                    src={previewImage}
                    alt="Uploaded Preview"
                    className="w-24 h-24 rounded-full mx-auto border-4 border-white shadow-md"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomizedBottle;