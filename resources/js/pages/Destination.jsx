// src/pages/Destination.jsx
import React, { useState } from 'react';
import DestinationCard from '../components/DestinationCard';
import Pagination from '../components/Pagination';

// Dummy data destinasi
const destinations = [
  { title: "Bali", image: "/images/bali3.jpg", price: "$200" },
  { title: "Lombok", image: "/images/komodo.jpg", price: "$180" },
  { title: "Raja Ampat", image: "/images/rajaempat.jpg", price: "$220" },
  { title: "Labuan Bajo", image: "/images/labuanbajo.jpg", price: "$250" },
  { title: "Komodo", image: "/images/komodo.jpg", price: "$230" },
  { title: "Gili Trawangan", image: "/images/gilitrawangan.jpg", price: "$210" },
  { title: "Jakarta", image: "/images/jakarta.jpg", price: "$190" },
  { title: "Yogyakarta", slug: "borobudur", image: "/images/borobudur.jpg", price: "$170" },
  { title: "Bromo", image: "/images/bromo.jpg", price: "$195" },
  { title: "Toba Lake", image: "/images/toba.jpg", price: "$200" },
];

const Destination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const destinationsPerPage = 8;

  const indexOfLast = currentPage * destinationsPerPage;
  const indexOfFirst = indexOfLast - destinationsPerPage;
  const currentDestinations = destinations.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(destinations.length / destinationsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
        {currentDestinations.map((dest, index) => (
          <DestinationCard key={index} {...dest} />
        ))}
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default Destination;
