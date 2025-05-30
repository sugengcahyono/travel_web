// resources/js/components/BlogInclusionSection.jsx
import React from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const includedItems = [
  'Tiket masuk destinasi',
  'Transportasi (kereta api)',
  'Pemandu wisata profesional',
  'Makan siang tradisional',
];

const excludedItems = [
  'Pengeluaran pribadi',
  'Asuransi perjalanan',
  'Biaya tambahan aktivitas opsional',
];

const BlogInclusionSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Termasuk & Tidak Termasuk</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Included */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 text-green-600">Termasuk</h3>
            <ul className="space-y-3">
              {includedItems.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4 text-red-600">Tidak Termasuk</h3>
            <ul className="space-y-3">
              {excludedItems.map((item, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <XCircleIcon className="w-5 h-5 text-red-500 mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogInclusionSection;
