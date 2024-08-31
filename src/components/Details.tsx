import React, { useState } from 'react';

const Details: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('https://gox-production-e708.up.railway.app/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        setSuccessMessage(result.message);
        setFormData({ name: '', email: '', message: '' }); 
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const closePopup = () => {
    setSuccessMessage(null);
  };

  return (
    <section id="details" className="">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-extrabold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl transform transition duration-300">
            <h3 className="text-3xl font-MontBold mb-8 text-indigo-700">Our Details</h3>
            <div className="space-y-6">
              <p className="flex items-center text-lg">
                <svg
                  className="w-8 h-8 mr-4 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <a
                  href="mailto:wecare@treaz.in"
                  className="text-indigo-600 hover:text-pink-500 transition duration-300 font-MontSemibold"
                >
                  wecare@treaz.in
                </a>
              </p>
              <p className="flex items-center text-lg">
                <svg
                  className="w-8 h-8 mr-4 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                <a
                  href="tel:+1234567890"
                  className="text-indigo-600 hover:text-pink-500 transition duration-300 font-MontRegular"
                >
                  +123 456 7890
                </a>
              </p>
              <p className="flex items-center text-lg">
                <svg
                  className="w-8 h-8 mr-4 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-gray-700 font-MontSemibold">License Number: ABC123456</span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl transition duration-300">
            <h3 className="text-3xl font-MontBold mb-8 text-indigo-700">Send us a Message</h3>
            <form id="contactForm" onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-300"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-300"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition duration-300"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Success Message Popup */}
        {successMessage && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm text-center">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">Success!</h3>
              <p className="text-gray-700 mb-6">{successMessage}</p>
              <button
                onClick={closePopup}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Details;
