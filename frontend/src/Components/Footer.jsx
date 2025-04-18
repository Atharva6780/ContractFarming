import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white py-8 mt-10 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-2xl font-bold mb-2">Contract Farming</h2>
          <p className="text-sm text-gray-300">
            Empowering farmers and buyers through transparent, secure, and efficient contract-based agriculture solutions.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
          <p className="text-sm text-gray-300">Email: support@contractfarming.com</p>
          <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
          <p className="text-sm text-gray-300">Location: Pune, Maharashtra, India</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-green-700 mt-6 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Contract Farming. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
