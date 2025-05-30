// tampilan detaildestination
import React from 'react';
import { useParams } from 'react-router-dom';
import BlogInclusionSection from '../components/BlogInclusionSection';

const Blog = () => {
  const { slug } = useParams();

  // Data statis berdasarkan slug
  const blogData = {
    borobudur: {
      title: 'Borobudur Temple',
      image: '/images/budur.jpg',
      date: 'Mei 20, 2025',
      location: 'Magelang, Central Java',
      groupSize: '10 - 15 People',
      price: 'IDR 500.000',
    },
    // Tambahkan data lainnya jika diperlukan
  };

  const data = blogData[slug];

  // Jika slug tidak ditemukan
  if (!data) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h2 className="text-2xl font-semibold mb-4">Halaman tidak ditemukan</h2>
        <p>Konten untuk destinasi <strong>{slug}</strong> belum tersedia.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[500px]">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-30 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold uppercase tracking-wide">
            {data.title}
          </h1>
        </div>
      </div>

      {/* Info Section */}
      <div className="max-w-4xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        {/* Date */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-3xl mb-2">📅</div>
          <p className="text-sm text-gray-500">Date</p>
          <p className="text-md font-semibold text-gray-800">{data.date}</p>
        </div>

        {/* Location */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-3xl mb-2">📍</div>
          <p className="text-sm text-gray-500">Location</p>
          <p className="text-md font-semibold text-gray-800">{data.location}</p>
        </div>

        {/* Group Size */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="text-3xl mb-2">👥</div>
          <p className="text-sm text-gray-500">Group Size</p>
          <p className="text-md font-semibold text-gray-800">{data.groupSize}</p>
        </div>

        {/* Price */}
        <div className="bg-blue-600 text-white rounded-lg shadow-md p-6 flex flex-col justify-center">
          <p className="text-sm">Starting From</p>
          <p className="text-2xl font-bold mt-1">{data.price}</p>
          <button className="mt-4 bg-white text-blue-600 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition">
            Book Now
          </button>
        </div>
      </div>

      {/* Konten lainnya tetap seperti yang Anda tulis */}
      <div className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Rencana Perjalanan
          </h2>
          <div className="space-y-6">
            {/* Hari 1 */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Hari 1: Tiba di Yogyakarta</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Penjemputan di Bandara Adisucipto</li>
                <li>Check-in hotel</li>
                <li>Makan malam di restoran lokal</li>
              </ul>
            </div>
            {/* Hari 2 */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Hari 2: Wisata Borobudur</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Kunjungan ke Candi Borobudur saat matahari terbit</li>
                <li>Wisata desa sekitar Borobudur</li>
                <li>Kembali ke Yogyakarta dan istirahat</li>
              </ul>
            </div>
            {/* Hari 3 */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">Hari 3: Jelajah Kota</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Kraton Yogyakarta & Taman Sari</li>
                <li>Belanja oleh-oleh di Malioboro</li>
                <li>Transfer ke bandara</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Ticket Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
          Tiket Perjalanan Anda
        </h2>

        <div className="bg-white rounded-xl shadow-md border border-gray-300 overflow-hidden">
          {/* Header tiket */}
          <div className="flex justify-between items-center bg-blue-600 text-white px-6 py-4">
            <div>
              <h3 className="text-lg font-semibold">KERETA API - EKSEKUTIF</h3>
              <p className="text-sm">Argo Dwipangga</p>
            </div>
            <div className="text-right">
              <p className="text-sm">Tiket ID: <span className="font-semibold">AD1256</span></p>
              <p className="text-sm">10 Juni 2025</p>
            </div>
          </div>

          {/* Body tiket */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Asal */}
              <div>
                <p className="text-sm text-gray-500">Asal</p>
                <h4 className="text-xl font-semibold text-gray-800">Pasar Senen</h4>
                <p className="text-sm text-gray-600">Jakarta</p>
              </div>

              {/* Icon kereta */}
              <div className="flex flex-col items-center">
                <span className="text-2xl">🚆</span>
                <div className="border-t border-dashed border-gray-400 w-32 mt-2" />
              </div>

              {/* Tujuan */}
              <div>
                <p className="text-sm text-gray-500">Tujuan</p>
                <h4 className="text-xl font-semibold text-gray-800">Tugu Yogyakarta</h4>
                <p className="text-sm text-gray-600">Yogyakarta</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-sm text-gray-700">
              <div>
                <p className="font-medium">Penumpang</p>
                <p>Rina Pratiwi</p>
              </div>
              <div>
                <p className="font-medium">Nomor Kursi</p>
                <p>A3 - 12B</p>
              </div>
              <div>
                <p className="font-medium">Waktu Berangkat</p>
                <p>08:00 WIB</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 px-6 py-4 text-right">
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
              Pesan
            </button>
          </div>
        </div>
      </div>

      <BlogInclusionSection />
    </div>
  );
};

export default Blog;
