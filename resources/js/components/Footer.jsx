import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { SiTiktok } from 'react-icons/si'; // Tambahan TikTok

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand + Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">TravelIn</h2>
          <p className="text-gray-400 text-sm">
            Discover the best destinations around Indonesia with us. Your adventure starts here.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="#" aria-label="Facebook"><Facebook /></a>
            <a href="#" aria-label="Twitter"><Twitter /></a>
            <a href="#" aria-label="Instagram"><Instagram /></a>
            <a href="#" aria-label="TikTok"><SiTiktok /></a> {/* TikTok */}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TravelIn. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
