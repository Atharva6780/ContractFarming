import React, { useState, useEffect } from 'react';

// Import images from the assets folder
import img1 from '../assets/c1.jpg';
import img2 from '../assets/c2.jpg';
import img3 from '../assets/c3.jpg';

const images = [img1, img2, img3];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(10000);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      
      {/* Carousel */}
      <div className="relative w-full h-96 overflow-hidden">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`w-full h-96 object-cover absolute transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${index === current ? 'bg-green-500' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-10">Why Choose Contract Farming?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Guaranteed Buy-Back</h3>
            <p className="text-gray-700">Farmers get assured buyers and pre-decided pricing for their produce, reducing financial risk.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Transparent Agreements</h3>
            <p className="text-gray-700">Clear, secure contracts ensure fairness for both parties and avoid middlemen exploitation.</p>
          </div>
          <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold text-green-800 mb-2">Smart Tech Integration</h3>
            <p className="text-gray-700">Track progress, delivery, payments, and quality checks in one centralized digital dashboard.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
