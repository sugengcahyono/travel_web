import React from 'react';
import { FiMapPin, FiCalendar, FiUsers, FiSearch } from 'react-icons/fi';
import WhyChooseUs from '../components/WhyChooseUs';
import OurPartners from '../components/OurPartners';
import TopBookNow from '../components/TopBookNow';
import ExperienceWorld from '../components/ExperienceWorld';
import FeatureNews from '../components/FeatureNews';
import Testimonials from '../components/Testimonials';
import GetSpecialOffer from '../components/GetSpecialOffer';


const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg-bali.jpg')" }}
      >
        {/* Overlay Form Box */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 md:w-[850px] bg-white shadow-xl rounded-xl px-6 py-8">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">Good Morning!</h1>
          <p className="text-gray-700 mb-6">Explore beautiful places in the world with Acenda</p>

          {/* Form Search */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
            {/* Location */}
            <div className="flex items-center border px-3 py-2 rounded-lg">
              <FiMapPin className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Add destination"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Check in */}
            <div className="flex items-center border px-3 py-2 rounded-lg">
              <FiCalendar className="text-gray-500 mr-2" />
              <input
                type="date"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Check out */}
            <div className="flex items-center border px-3 py-2 rounded-lg">
              <FiCalendar className="text-gray-500 mr-2" />
              <input
                type="date"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Guests */}
            <div className="flex items-center border px-3 py-2 rounded-lg">
              <FiUsers className="text-gray-500 mr-2" />
              <input
                type="number"
                min="1"
                placeholder="Add guests"
                className="w-full outline-none text-sm"
              />
            </div>

            {/* Search Button */}
            <button className="bg-blue-600 text-white rounded-full p-3 hover:bg-blue-700 transition duration-200">
              <FiSearch />
            </button>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <WhyChooseUs />
      
        {/* OUR PARTNERS SECTION */}
      <OurPartners />
      <TopBookNow />    
      <ExperienceWorld />
      <FeatureNews />
      <Testimonials />
      <GetSpecialOffer />

    </div>
  );
};

export default Home;
