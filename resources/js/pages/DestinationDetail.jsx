import React from 'react';
import { useParams } from 'react-router-dom';

const DestinationDetail = () => {
  const { slug } = useParams();

  return (
    <div className="w-full">
      <div className="relative w-full h-[500px]">
        <img
          src={`/images/${slug}.jpg`}
          alt={slug}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold uppercase tracking-wide">
            {slug.replace(/-/g, ' ')}
          </h1>
        </div>
      </div>

      {/* Tambahkan bagian lain seperti itinerary, inclusion, dll */}
    </div>
  );
};

export default DestinationDetail;
