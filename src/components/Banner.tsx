import React, { useState, useEffect } from 'react';

const bannerImages = [
  'https://bisleri-shop-storage.s3.ap-south-1.amazonaws.com/page-banners/June2024/ho7F6ER4g3o8vS1u8Iv0.webp',
  'https://bisleri-shop-storage.s3.ap-south-1.amazonaws.com/page-banners/June2024/eXznwexEkl4S8rAvs1P0.webp',
  'https://bisleri-shop-storage.s3.ap-south-1.amazonaws.com/page-banners/June2024/Gk5st0y4fHUGCA5FbxZH.webp',
];

const Banner: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto slide every 5 seconds unless hovered
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  // Manually go to next/previous image
  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length);
  };

  return (
    <section
      className="relative flex items-center justify-center mx-auto overflow-hidden"
      style={{ maxWidth: '1000px', height: 'auto' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative w-full h-auto"
        style={{
          display: 'flex',
          transition: 'transform 1s ease-in-out',
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        {bannerImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className="w-full h-auto object-contain"
            style={{ flexShrink: 0 }}
          />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        aria-label="Previous Slide"
        className="absolute left-2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-300"
        onClick={goToPrev}
      >
        &#9664;
      </button>
      <button
        aria-label="Next Slide"
        className="absolute right-2 bg-white rounded-full p-2 shadow-lg z-10 hover:bg-gray-300"
        onClick={goToNext}
      >
        &#9654;
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-4 flex space-x-2">
        {bannerImages.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              index === currentImageIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            style={{ cursor: 'pointer' }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
