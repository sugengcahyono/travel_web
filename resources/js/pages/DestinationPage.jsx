// src/pages/DestinationPage.jsx
import React from 'react';
import DestinationHeader from '../components/DestinationHeader';
import Destination from './Destination'; // Pastikan path-nya benar ke file yang punya pagination dan data

const DestinationPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header di bagian atas halaman */}
      <DestinationHeader />

      {/* Daftar destinasi dengan pagination */}
      <Destination />
    </div>
  );
};

export default DestinationPage;
