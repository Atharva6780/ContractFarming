import { useState } from "react";

const AddCrop = () => {
  const [crops, setCrops] = useState([]);
  const [cropName, setCropName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAddCrop = () => {
    if (!cropName.trim()) return;
    if (editIndex !== null) {
      const updated = [...crops];
      updated[editIndex] = cropName.trim();
      setCrops(updated);
      setEditIndex(null);
    } else {
      setCrops([...crops, cropName.trim()]);
    }
    setCropName("");
  };

  const handleEdit = (index) => {
    setCropName(crops[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = crops.filter((_, i) => i !== index);
    setCrops(updated);
    if (editIndex === index) {
      setCropName("");
      setEditIndex(null);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-green-700 mb-6">Manage Your Crops</h2>

      {/* Input */}
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          placeholder="Enter crop name"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleAddCrop}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      {/* Crop List */}
      {crops.length > 0 ? (
        <ul className="space-y-3">
          {crops.map((crop, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-3 rounded-lg"
            >
              <span>{crop}</span>
              <div className="space-x-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No crops added yet.</p>
      )}
    </div>
  );
};

export default AddCrop;
