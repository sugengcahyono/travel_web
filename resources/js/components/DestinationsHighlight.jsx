import React from 'react';

const highlights = [
  {
    image: 'https://source.unsplash.com/400x300/?mountain,indonesia',
    title: 'Lesser Sunda Islands',
    subtitle: 'Untouched Paradise, Beyond the Ordinary',
  },
  {
    image: 'https://source.unsplash.com/400x300/?java,island',
    title: 'Java Islands',
    subtitle: 'Where Heritage Meets Modern Wonders',
  },
  {
    image: 'https://source.unsplash.com/400x300/?papua,island',
    title: 'Papua Islands',
    subtitle: "Nature's Last Frontier Awaits You",
  },
  {
    image: 'https://source.unsplash.com/400x300/?sumatra,beach',
    title: 'Sumatra Islands',
    subtitle: 'Mystical Land of Volcanoes, Wildlife & Wonders',
  },
];

const DestinationsHighlight = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Title Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Destinations Highlights</h1>
        <p className="text-sm text-gray-500 mt-2">Home / Destination Highlights</p>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto">
          Jelajahi keindahan tersembunyi dari berbagai destinasi menakjubkan dalam pilihan eksklusif kami!
          Pastikan Anda tidak melewatkan kesempatan untuk mengeksplorasi keajaiban dunia yang memikat dan
          ciptakan kenangan yang abadi bersama kami!
        </p>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
            <div className="p-5 text-center">
              <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
              <p className="text-gray-600 mt-1">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinationsHighlight;
