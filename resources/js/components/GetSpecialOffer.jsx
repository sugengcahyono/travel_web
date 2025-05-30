import React from 'react';

const GetSpecialOffer = () => {
  return (
    <div className="bg-gradient-to-r from-white-700 to-blue-500 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* LEFT TEXT & FORM */}
        <div className="md:w-1/2 text-black text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Special Offers and Updates
          </h2>
          <p className="text-black/90 mb-6 text-sm md:text-base">
            Join our newsletter and never miss a travel deal again.
          </p>

          <form className="flex flex-col sm:flex-row items-center gap-4 w-full">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full text-black focus:outline-none focus:ring-2 focus:ring-black-200 w-full sm:w-auto"
            />
            <button
              type="submit"
              className="bg-white text-black-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2">
          <img
            src="/images/penginapan1.jpg" // ⬅️ Ganti path sesuai gambar yang kamu punya
            alt="Special Offer"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default GetSpecialOffer;
