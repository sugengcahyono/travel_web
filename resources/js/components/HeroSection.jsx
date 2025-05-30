import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight">
            Discover Your Next Adventure
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Find the best destinations and travel experiences tailored just for you.
          </p>
          <div className="mt-6">
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
              Explore Now
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img src="/images/hero-travel.png" alt="Travel" className="w-full max-w-md mx-auto md:mx-0" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
