// src/components/WhyChooseUs.jsx
import React from 'react';
import { FaTags, FaLock, FaSmile } from 'react-icons/fa';

const WhyChooseUs = () => {
  const items = [
    {
      icon: <FaTags className="text-blue-600 text-3xl mb-3" />,
      title: 'Competitive Prices',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    },
    {
      icon: <FaLock className="text-blue-600 text-3xl mb-3" />,
      title: 'Secure Booking',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    },
    {
      icon: <FaSmile className="text-blue-600 text-3xl mb-3" />,
      title: 'Seamless Experience',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.',
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl font-bold mb-10 text-gray-800">WHY CHOOSE US?</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {items.map((item, index) => (
          <div key={index} className="p-6 rounded-lg">
            {item.icon}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
