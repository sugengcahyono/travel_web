import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import '../css/app.css';

// Komponen global
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Halaman
import DestinationPage from './pages/DestinationPage';
import DestinationHighlight from './pages/DestinationHighlight';
import BlogList from './pages/BlogList';
import Blog from './pages/Blog'; // ✅ PERBAIKAN: tambahkan impor Blog detail
import BlogDetailPage from './pages/BlogDetailPage'; // ✅ Tambahan
import Home from './pages/Home'; // ⬅️ Tambahkan ini



// import Contact from './pages/Contact';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import DestinationDetail from './pages/DestinationDetail';

// Fallback 404
const NotFound = () => (
  <div className="text-center py-20 text-gray-600">
    <h1 className="text-2xl font-semibold">404 - Page Not Found</h1>
    <p className="mt-4">Halaman yang kamu cari tidak ditemukan.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <main className="p-4 min-h-screen">
        <Routes>
          {/* Redirect root ke halaman destinasi */}
          <Route path="/" element={<Navigate to="/destinations" />} />

          {/* Halaman utama destinasi */}
          <Route path="/destinations" element={<DestinationPage />} />

          {/* Halaman highlight */}
          <Route path="/destination-highlight" element={<DestinationHighlight />} />

          {/* Halaman daftar blog */}
          <Route path="/blog" element={<BlogList />} />

          {/* Halaman detail blog berdasarkan slug */}
          <Route path="/blog/:slug" element={<Blog />} />

          <Route path="/blog-detail/:slug" element={<BlogDetailPage />} />

          <Route path="/home" element={<Home />} />

          

          {/* Contoh rute tambahan, aktifkan jika diperlukan */}
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/signin" element={<SignIn />} /> */}
          {/* <Route path="/signup" element={<SignUp />} /> */}
          {/* <Route path="/destination/:slug" element={<DestinationDetail />} /> */}

          {/* Fallback untuk rute tidak ditemukan */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

// Render React
const rootElement = document.getElementById('app');
if (rootElement && !rootElement._reactRootContainer) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
