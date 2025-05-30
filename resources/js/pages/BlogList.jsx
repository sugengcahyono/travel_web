import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    date: 'February 20, 2024',
    title: 'Delicious restaurant at Hanalei Bay',
    image: '/images/hanalei-dolphin.jpg',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...',
    slug: 'hanalei-bay-restaurant',
  },
  {
    id: 2,
    date: 'February 20, 2024',
    title: 'Delicious restaurant at Hanalei Bay',
    image: '/images/hanalei-food.jpg',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...',
    slug: 'hanalei-bay-restaurant-2',
  },
  {
    id: 3,
    date: 'February 20, 2024',
    title: 'Delicious restaurant at Hanalei Bay',
    image: '/images/hanalei-food.jpg',
    excerpt: 'Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...',
    slug: 'hanalei-bay-restaurant-3',
  },
];

const BlogList = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Search Bar */}
      <div className="bg-white py-6 shadow">
        <div className="max-w-5xl mx-auto px-4">
          <input
            type="text"
            placeholder="Masukkan kata kunci, lokasi, atau topik..."
            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Blog Cards */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Gambar Klik ke BlogDetailPage */}
            <Link to={`/blog-detail/${blog.slug}`}>
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover transition duration-300 hover:scale-105"
              />
            </Link>

            <div className="p-5">
              <p className="text-sm text-gray-500 flex items-center mb-1">
                📅 {blog.date}
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>

              {/* Tombol "See More" juga arahkan ke BlogDetailPage */}
              <Link
                to={`/blog-detail/${blog.slug}`}
                className="text-blue-600 font-medium hover:underline"
              >
                See more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
