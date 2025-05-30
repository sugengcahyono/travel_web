import React from 'react';

const ExperienceWorld = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat mt-20 py-20"
      style={{ backgroundImage: "url('/images/pemandanganbg.jpg')" }}
    >
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl font-bold text-white">Experience the World</h2>
        <p className="text-white mt-2 text-lg">Explore different cultures and adventures around the globe</p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src="/images/bali3.jpg" alt="Bali Adventure" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 text-lg">Bali Adventure</h3>
            <p className="text-gray-600 text-sm mt-1">Discover the temples, beaches and spiritual vibes.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src="/images/swiss.jpg" alt="Swiss Alps" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 text-lg">Swiss Alps</h3>
            <p className="text-gray-600 text-sm mt-1">Enjoy skiing and majestic mountain landscapes.</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img src="/images/afrika.jpg" alt="Safari Africa" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold text-gray-800 text-lg">Safari Africa</h3>
            <p className="text-gray-600 text-sm mt-1">Experience wildlife and the beauty of nature.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceWorld;
