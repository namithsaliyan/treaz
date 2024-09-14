import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WriteReview: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    review: '',
    rating: 0
  });
  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prevState => ({
      ...prevState,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('https://review-x.up.railway.app/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Thank you for your review!');
        setFormData({ name: '', review: '', rating: 0 });
        setTimeout(() => navigate('/all-reviews'), 2000);
      } else {
        setMessage('Failed to submit review. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
      setMessage('Error submitting review. Please try again.');
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-200 via-purple-200 to-blue-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center text-purple-900">
          Share Your Experience
        </h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-3xl shadow-lg transform transition duration-500 hover:shadow-2xl">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 text-lg font-semibold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-transform duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="review" className="block text-gray-800 text-lg font-semibold mb-2">Your Review</label>
            <textarea
              id="review"
              name="review"
              value={formData.review}
              onChange={handleChange}
              rows={5}
              className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition-transform duration-300"
              required
            ></textarea>
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 text-lg font-semibold mb-2">Rating</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRatingChange(star)}
                  className={`text-4xl transition-transform duration-300 ${formData.rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300"
          >
            Submit Review
          </button>
        </form>
        {message && (
          <p className={`mt-6 text-center text-lg font-semibold ${message.includes('Thank you') ? 'text-green-600' : 'text-red-600'} transition-opacity duration-500`}>
            {message}
          </p>
        )}
      </div>
    </section>
  );
};

export default WriteReview;
