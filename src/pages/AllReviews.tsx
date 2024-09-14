import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Review {
  id: number;
  name: string;
  review: string;
  rating: number;
}

const AllReviews: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://review-x.up.railway.app/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-blue-100 to-purple-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-blue-900">
          All Reviews
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-2xl shadow-xl transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-6 h-6 transition-transform duration-300 ${i < review.rating ? 'text-yellow-500' : 'text-gray-400'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ transform: i < review.rating ? 'scale(1.1)' : 'scale(1)' }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-800 mb-4 leading-relaxed">{review.review}</p>
              <cite className="block text-right text-blue-700 font-semibold text-lg">- {review.name}</cite>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/write-review" className="inline-block bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
            Write a Review
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllReviews;
