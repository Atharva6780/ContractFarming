import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-emerald-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <div className="text-2xl font-bold tracking-wide">
          Contract Farming
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 hidden md:flex text-sm font-medium">
          <a href="/" className="hover:text-green-200 transition">Home</a>
          <a href="/about" className="hover:text-green-200 transition">About</a>
          <a href="/services" className="hover:text-green-200 transition">Services</a>
          <a href="/contact" className="hover:text-green-200 transition">Contact</a>
          <a href="/login" className="bg-white text-green-800 px-4 py-1 rounded-lg hover:bg-green-100 transition">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
