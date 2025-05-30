import React from 'react';

const BlogHeader = () => {
  return (
    <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('/images/blog-hero.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Explore Stories and Travel Tips</h1>
      </div>
    </div>
  );
};

export default BlogHeader;
