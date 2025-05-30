import React from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: 'Raja Ampat',
    image: '/images/rajaempat.jpg',
    price: '$450',
  },
  {
    id: 2,
    name: 'Mount Bromo',
    image: '/images/bromo.jpg',
    price: '$300',
  },
  {
    id: 3,
    name: 'Nusa Penida',
    image: '/images/nusa penida.jpg',
    price: '$350',
  },
  {
    id: 4,
    name: 'Labuan Bajo',
    image: '/images/labuanbajo.jpg',
    price: '$500',
  },
];

const TopBookNow = () => {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase mb-6">
          Top Book Now
        </h2>

        {/* Destination Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {destinations.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                <p className="text-blue-600 font-bold text-sm mb-3">{item.price}</p>
                <button className="bg-blue-600 text-white text-sm py-2 px-4 rounded-full hover:bg-blue-700 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See All Button - Bottom */}
        <div className="mt-10 text-center">
          <Link
            to="/destinations"
            className="inline-block text-sm md:text-base text-blue-600 font-medium hover:underline"
          >
            See All →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopBookNow;
