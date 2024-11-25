import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InventorySearch: React.FC = () => {
  const [filters, setFilters] = useState({
    status: 'new',
    year: '2020',
    brand: 'Jaguar',
    type: 'F-Type',
    priceRange: 50000,
  });

  const navigate = useNavigate(); // Initialize the navigate hook

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Function to handle the search button click
  const handleSearch = () => {
    // You can pass the filters as query params or handle them in a global state
    // For simplicity, we'll just navigate to the /cars route
    navigate('/register');
  };

  return (
    <div className="bg-gray-100 p-8 text-center">
      <h2 className="text-2xl font-bold mb-6">Let's Find Your Dream Car</h2>
      <div className="flex flex-wrap justify-center gap-4">
        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="border rounded p-2"
        >
          <option value="new">New</option>
          <option value="used">Used</option>
        </select>
        <select
          name="year"
          value={filters.year}
          onChange={handleChange}
          className="border rounded p-2"
        >
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
        </select>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleChange}
          className="border rounded p-2"
        >
          <option value="Jaguar">Jaguar</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
        </select>
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="border rounded p-2"
        >
          <option value="F-Type">F-Type</option>
          <option value="Coupe">Coupe</option>
          <option value="Convertible">Convertible</option>
        </select>
      </div>
      <div className="mt-6">
        <input
          type="range"
          name="priceRange"
          min="50000"
          max="100000"
          value={filters.priceRange}
          onChange={handleChange}
          className="w-1/2"
        />
        <p className="mt-2">Price Range: ${filters.priceRange}</p>
        <button
          onClick={handleSearch} // Call handleSearch on button click
          className="mt-6 px-6 py-3 bg-red-600 text-white font-medium"
        >
          Search Inventory
        </button>
      </div>
    </div>
  );
};

export default InventorySearch;
