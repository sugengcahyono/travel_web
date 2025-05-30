import React from 'react';

const HighlightCard = ({ image, title, description }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 bg-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default HighlightCard;
