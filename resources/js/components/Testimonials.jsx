import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    image: '/images/user1.jpg',
    location: 'New York, USA',
    comment: 'This was one of the best trips I’ve ever had. Everything was perfectly arranged!',
  },
  {
    name: 'Jane Smith',
    image: '/images/user2.jpg',
    location: 'Paris, France',
    comment: 'Amazing service, beautiful destinations, and very easy to book. Totally recommended!',
  },
  {
    name: 'Carlos Gomez',
    image: '/images/user3.jpg',
    location: 'Madrid, Spain',
    comment: 'Professional team and great experience overall. I will book again soon!',
  },
];

const Testimonials = () => {
  return (
    <div
      className="py-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/tepipantai.jpg')" }} 
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-black mb-4">Testimonials</h2>
        <p className="text-center text-black/80 mb-10">
          Real experiences shared by our amazing travelers
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div key={index} className="text-black border border-white/30 p-6 rounded-lg shadow-md backdrop-blur-sm bg-white/5">
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border border-black/50"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-sm opacity-70">{item.location}</p>
                </div>
              </div>
              <p className="text-sm italic">“{item.comment}”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
