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
    <section className="py-20 bg-gradient-to-b from-blue-100 to-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-blue-800">All Reviews</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{review.review}</p>
              <cite className="block text-right text-blue-600 font-semibold">- {review.name}</cite>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/write-review" className="inline-block bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-full transform hover:scale-105 transition duration-300">
            Write a Review
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllReviews;
