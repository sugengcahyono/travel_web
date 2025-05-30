import React from 'react';
import HighlightCard from '../components/HighlightCard';

const highlightDestinations = [
  {
    image: 'https://cdn01.metrotvnews.com/dynamic/content/2025/05/26/NxGCGY1n/a_683456806465e.jpg?w=720',
    title: 'Borobudur Temple',
    description: 'One of the greatest Buddhist monuments in the world.',
  },
  {
    image: 'https://torch.id/cdn/shop/articles/Artikel_167_-_Preview.webp?v=1713337145',
    title: 'Mount Bromo',
    description: 'An iconic volcano with stunning sunrise views.',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Raja_Ampat%2C_Mutiara_Indah_di_Timur_Indonesia.jpg',
    title: 'Raja Ampat',
    description: 'A diver’s paradise with breathtaking underwater scenery.',
  },
  {
    image: 'https://lp-cms-production.imgix.net/2023-02/shutterstockRF_755737138.jpg',
    title: 'Ubud, Bali',
    description: 'Cultural heart of Bali known for rice paddies and art.',
  },
];

const DestinationHighlight = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <h2 className="text-center text-gray-500 text-sm mb-1">Home / Destination Highlight</h2>

      {/* Main Title */}
      {/* <h1 className="text-center text-2xl font-bold mb-4 text-gray-800">
        Highlighted Destinations of Indonesia
      </h1> */}

      {/* Description */}
      <p className="text-center max-w-2xl mx-auto text-gray-600 mb-10">
        Jelajahi keindahan tersembunyi dari berbagai desinasi menakjubkan dalam pilihan eksklusif kami! pastikan anda
        tidak melewatkan kesempatan untuk mengeskplorasi keajaiban dunia yang memikat dan ciptakan kenangan yang
        abadi bersama kami!
      </p>

      {/* Destination Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {highlightDestinations.map((item, index) => (
          <HighlightCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DestinationHighlight;
