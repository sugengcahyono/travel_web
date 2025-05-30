import React from 'react';
import { Link } from 'react-router-dom';

const newsList = [
  {
    id: 1,
    title: 'The Best Sunset Spots in Bali',
    date: 'May 15, 2024',
    image: '/images/bali3.jpg',
    excerpt: 'Discover the most beautiful spots to watch the sunset in Bali...',
    slug: 'sunset-spots-bali'
  },
  {
    id: 2,
    title: 'Explore Hidden Waterfalls in Ubud',
    date: 'May 10, 2024',
    image: '/images/bg-bali.jpg',
    excerpt: 'Ubud is home to many secret waterfalls that are worth the hike...',
    slug: 'hidden-waterfalls-ubud'
  },
  {
    id: 3,
    title: 'Local Cuisine You Must Try in Yogyakarta',
    date: 'May 5, 2024',
    image: '/images/borobudur.jpg',
    excerpt: 'Yogyakarta offers some of the most authentic local dishes...',
    slug: 'local-food-yogyakarta'
  },
];

const FeatureNews = () => {
  return (
  <section className="bg-white py-16 px-4">
    <div className="max-w-7xl mx-auto">
      {/* Judul */}
      <h2 className="text-2xl font-bold text-gray-800 mb-8">Feature News</h2>

      {/* Grid kartu */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsList.map((news) => (
          <Link key={news.id} to={`/blog/${news.slug}`} className="block bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-md transition">
            <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
            <div className="p-5">
              <p className="text-sm text-gray-500 mb-1">{news.date}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{news.title}</h3>
              <p className="text-sm text-gray-600">{news.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Tombol See All */}
      <div className="mt-10 text-center">
        <Link to="/blog" className="inline-block text-blue-600 hover:underline font-medium text-base">
          See All →
        </Link>
      </div>
    </div>
  </section>
);

};

export default FeatureNews;
