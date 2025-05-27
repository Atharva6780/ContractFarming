const About = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-green-700">
          About Us
        </h1>

        <p className="text-lg mb-6 text-justify">
          Welcome to <span className="font-semibold">AgriConnect</span>, a revolutionary platform designed to bridge the gap between farmers and agribusinesses through contract farming. Our mission is to empower farmers by providing them with reliable markets, advanced technologies, and financial security while ensuring consistent supply and quality for buyers.
        </p>

        <p className="text-lg mb-6 text-justify">
          Our platform enables transparent, secure, and mutually beneficial agreements between farmers and corporations. With real-time data, tracking, and digital contracts, we aim to modernize traditional farming practices and create a win-win ecosystem for all stakeholders.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-600">Our Vision</h2>
        <p className="text-lg mb-6 text-justify">
          To be the leading digital platform that transforms agriculture through fair and sustainable contract farming practices.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-600">Our Mission</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>Empower farmers with better opportunities and resources.</li>
          <li>Promote fair and transparent contract agreements.</li>
          <li>Facilitate technology-driven and data-backed farming practices.</li>
          <li>Build a sustainable and traceable agricultural supply chain.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-green-600">Meet the Team</h2>
        <p className="text-lg mb-6 text-justify">
          Our team comprises passionate individuals with backgrounds in agriculture, technology, and business. We are committed to improving the lives of farmers and transforming the agri-sector through innovation and collaboration.
        </p>

        <p className="text-center mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} AgriConnect. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default About;
