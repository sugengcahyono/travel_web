// BlogDetail
import React from 'react';
import { useParams } from 'react-router-dom';

const blogData = {
  'hanalei-bay-restaurant': {
    title: 'Delicious restaurant at Hanalei Bay',
    date: 'February 20, 2024',
    image: '/images/hanalei-dolphin.jpg',
    content: `
      Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been lorem ...
      [konten lengkap akan ditambahkan di bagian berikutnya]
    `,
  },
  'hanalei-bay-restaurant-2': {
    title: 'Delicious restaurant at Hanalei Bay',
    date: 'February 20, 2024',
    image: '/images/hanalei-food.jpg',
    content: `
      Konten kedua...
    `,
  },
  'hanalei-bay-restaurant-3': {
    title: 'Delicious restaurant at Hanalei Bay',
    date: 'February 20, 2024',
    image: '/images/hanalei-food.jpg',
    content: `
      Konten ketiga...
    `,
  }
};

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogData[slug];

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h1 className="text-2xl font-semibold">Blog not found</h1>
        <p className="mt-4">We couldn't find the blog you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-500 mb-4 flex items-center">
          📅 {blog.date}
        </p>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-auto rounded-lg mb-6 object-cover"
        />
      </div>
    </div>
  );
};

export default BlogDetail;
