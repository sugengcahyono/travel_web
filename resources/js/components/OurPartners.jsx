import React from 'react';

const partners = [
  { name: 'KAI', logo: '/images/kai.png', alt: 'KAI' },
  { name: 'Citilink', logo: '/images/citilink.png', alt: 'Citilink' },
  { name: 'Lion Air', logo: '/images/lionair.png', alt: 'Lion Air' },
  { name: 'RedBus', logo: '/images/redbus.png', alt: 'RedBus' },
];

const OurPartners = () => {
  return (
    <section className="bg-white py-14">
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-bold text-gray-800 uppercase tracking-wide">
          Our Partners
        </h2>
      </div>
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-12 px-6">
        {partners.map((partner, idx) => (
          <img
            key={idx}
            src={partner.logo}
            alt={partner.alt}
            className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
