import { NavLink, Routes, Route } from "react-router-dom";
import BuyCrops from "./buyer/BuyCrops";
import MarketPrices from "./buyer/MarketPrices";
import Contracts from "./buyer/Contracts";

const BuyerDashboard = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-700 text-white p-4 space-y-4">
        <h2 className="text-2xl font-bold">Buyer Panel</h2>
        <NavLink to="buy-crops" className="block hover:bg-green-600 p-2 rounded">Buy Crops</NavLink>
        <NavLink to="market-prices" className="block hover:bg-green-600 p-2 rounded">Market Prices</NavLink>
        <NavLink to="contracts" className="block hover:bg-green-600 p-2 rounded">Contracts</NavLink>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6">
        <Routes>
          <Route path="buy-crops" element={<BuyCrops />} />
          <Route path="market-prices" element={<MarketPrices />} />
          <Route path="contracts" element={<Contracts />} />
        </Routes>
      </main>
    </div>
  );
};

export default BuyerDashboard;
