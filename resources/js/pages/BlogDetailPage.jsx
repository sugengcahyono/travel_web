import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetailPage = () => {
  const { slug } = useParams(); // menangkap slug dari URL

  // Dummy data (bisa diganti dengan fetch data nantinya)
  const blog = {
    title: 'Delicious Restaurant at Hanalei Bay',
    date: 'February 20, 2024',
    author: 'John Doe',
    image: '/images/hanalei-dolphin.jpg',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet lacus enim.
      Nullam tristique, metus sit amet gravida suscipit, lorem leo dictum libero,
      nec blandit orci lorem ut nisl. Quisque faucibus.
    `,
  };

  return (
    <div className="bg-white">
      {/* Hero Image */}
      <div className="relative w-full h-[400px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Meta Info */}
      <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-600">
        <p className="text-sm">📅 {blog.date} | ✍️ {blog.author}</p>
      </div>
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <div className="text-gray-800 leading-relaxed text-lg space-y-4">
          <p>{blog.content}</p>
          <p>{blog.content}</p>
          <p>{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
