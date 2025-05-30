import React from 'react';

const BlogContent = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-4 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">10 Tips Berwisata Nyaman ke Candi Borobudur</h2>
      <p className="text-gray-600">Borobudur adalah salah satu situs warisan dunia UNESCO yang sangat populer di Indonesia...</p>

      <img src="/images/borobudur-article.jpg" alt="Borobudur" className="rounded-md w-full" />

      <p className="text-gray-600">
        1. Datang pagi hari untuk menghindari keramaian.<br />
        2. Gunakan alas kaki yang nyaman.<br />
        3. Bawa air minum sendiri...<br />
        {/* dst */}
      </p>
    </div>
  );
};

export default BlogContent;
