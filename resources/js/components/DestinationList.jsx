import React, { useState } from 'react';
import DestinationCard from './DestinationCard';
import Pagination from './Pagination';

const destinations = [
  {
    image: 'https://source.unsplash.com/300x200/?temple',
    title: 'Borobudur Temple',
    location: 'Magelang, Central Java',
    price: 'IDR 38,588,000',
  },
  {
    image: 'https://source.unsplash.com/300x200/?beach,bali',
    title: 'Kuta Beach',
    location: 'Badung, Bali',
    price: 'IDR 38,588,000',
  },
  {
    image: 'https://source.unsplash.com/300x200/?rajaampat',
    title: 'Raja Ampat',
    location: 'West Papua',
    price: 'IDR 38,588,000',
  },
  {
    image: 'https://source.unsplash.com/300x200/?gili',
    title: 'Gili Islands',
    location: 'West Nusa Tenggara',
    price: 'IDR 38,588,000',
  },
  {
    image: 'https://source.unsplash.com/300x200/?mountain',
    title: 'Bromo Mountain',
    location: 'East Java',
    price: 'IDR 38,588,000',
  },
  {
    image: 'https://source.unsplash.com/300x200/?bunaken',
    title: 'Bunaken Marine Park',
    location: 'North Sulawesi',
    price: 'IDR 38,588,000',
  },
  {
    image: 'https://source.unsplash.com/300x200/?lake',
    title: 'Toba Lake',
    location: 'North Sumatra',
    price: 'IDR 38,588,000',
  },
  {
    image: 'https://source.unsplash.com/300x200/?labuanbajo',
    title: 'Labuan Bajo',
    location: 'East Nusa Tenggara',
    price: 'IDR 38,588,000',
  },
   {
    image: 'https://source.unsplash.com/300x200/?labuanbajo',
    title: 'Labuan Bajo',
    location: 'East Nusa Tenggara',
    price: 'IDR 38,588,000',
  },
];

const DestinationList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 8;

  const indexOfLast = currentPage * destinationsPerPage;
  const indexOfFirst = indexOfLast - destinationsPerPage;
  const currentDestinations = destinations.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(destinations.length / destinationsPerPage);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentDestinations.map((dest, idx) => (
          <DestinationCard key={idx} {...dest} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default DestinationList;
