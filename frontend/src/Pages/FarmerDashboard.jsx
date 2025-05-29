import { NavLink, Routes, Route } from "react-router-dom";
import AddCrop from "./Farmer/AddCrop";
import DiseaseDetection from "./farmer/DiseaseDetection";
import CropHistory from "./farmer/CropHistory";

const FarmerDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-700 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold">Farmer Panel</h2>
        <NavLink to="add-crop" className="block hover:bg-green-600 p-2 rounded">Add Crop</NavLink>
        <NavLink to="detect-disease" className="block hover:bg-green-600 p-2 rounded">Disease Detection</NavLink>
        <NavLink to="crop-history" className="block hover:bg-green-600 p-2 rounded">Crop History</NavLink>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="add-crop" element={<AddCrop />} />
          <Route path="detect-disease" element={<DiseaseDetection />} />
          <Route path="crop-history" element={<CropHistory />} />
        </Routes>
      </main>
    </div>
  );
};

export default FarmerDashboard;
