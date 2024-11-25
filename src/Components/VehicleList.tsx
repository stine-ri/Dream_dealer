import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GoBack from './GoBack';
// Import images
import teslaModelS from '../assets/images/cadillac.avif';
import teslaModelX from '../assets/images/back.jpg';
import bmwM3 from '../assets/images/2020-lincoln-navigator-lead-image.webp';

const vehicleData = [
  {
    id: 1,
    name: 'Tesla Model S',
    image: teslaModelS,
    rentalRate: 124,
    availability: true,
    passengers: 5,
    features: ['Electric', 'Unlimited mileage'],
    type: 'Standard',
  },
  {
    id: 2,
    name: 'Tesla Model X',
    image: teslaModelX,
    rentalRate: 136,
    availability: false,
    passengers: 5,
    features: ['Electric', 'Unlimited mileage'],
    type: 'Standard',
  },
  {
    id: 3,
    name: 'BMW M3',
    image: bmwM3,
    rentalRate: 150,
    availability: true,
    passengers: 4,
    features: ['Sporty', 'Premium'],
    type: 'Luxury',
  },
  {
    id: 4,
    name: 'Mercedes-Benz G-Class',
    image: teslaModelS,
    rentalRate: 200,
    availability: true,
    passengers: 7,
    features: ['Luxury', 'Off-road'],
    type: 'Luxury',
  },
  {
    id: 5,
    name: 'Audi Q7',
    image: bmwM3,
    rentalRate: 220,
    availability: true,
    passengers: 7,
    features: ['SUV', 'Luxury'],
    type: 'Luxury',
  },
  {
    id: 6,
    name: 'Ford Expedition',
    image: teslaModelX,
    rentalRate: 180,
    availability: true,
    passengers: 8,
    features: ['SUV', 'Family'],
    type: 'Luxury',
  },
];

const VehicleList: React.FC = () => {
  const [filteredVehicles, setFilteredVehicles] = useState(vehicleData);
  const navigate = useNavigate();

  const handleFilter = (type: string, passengers: string) => {
    let filtered = vehicleData;
    if (type) {
      filtered = filtered.filter((vehicle) => vehicle.type === type);
    }
    if (passengers) {
      if (passengers === '2-5') {
        filtered = filtered.filter((vehicle) => vehicle.passengers >= 2 && vehicle.passengers <= 5);
      } else if (passengers === '6+') {
        filtered = filtered.filter((vehicle) => vehicle.passengers >= 6);
      }
    }
    setFilteredVehicles(filtered);
  };

  const handleReserve = (vehicleId: number) => {
    navigate(`/book/${vehicleId}`);
  };

  return (
    <div className="flex flex-col lg:flex-row mt-20"> {/* Adjust layout for mobile-first design */}
      {/* Filter Sidebar */}
      <div className="lg:w-1/4 bg-white text-black p-6 mb-6 lg:mb-0">
      <GoBack/>
        <h2 className="text-xl font-bold mb-4">Filter by</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Car Type</h3>
          <button
            onClick={() => handleFilter('Standard', '')}
            className="block w-full px-4 py-2 mb-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Standard
          </button>
          <button
            onClick={() => handleFilter('Luxury', '')}
            className="block w-full px-4 py-2 mb-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Luxury
          </button>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Capacity</h3>
          <button
            onClick={() => handleFilter('', '2-5')}
            className="block w-full px-4 py-2 mb-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            2-5 passengers
          </button>
          <button
            onClick={() => handleFilter('', '6+')}
            className="block w-full px-4 py-2 mb-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            6 or more passengers
          </button>
        </div>
      </div>

      {/* Vehicle Grid */}
      <div className="lg:w-3/4 p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredVehicles.length > 0 ? (
          filteredVehicles.map((vehicle) => (
            <div
              key={vehicle.id}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-200"
            >
              <img
                src={vehicle.image}
                alt={vehicle.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">{vehicle.name}</h3>
              <p className="text-gray-500">{vehicle.features.join(', ')}</p>
              <p className="font-bold text-xl mt-2">${vehicle.rentalRate}/day</p>
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => handleReserve(vehicle.id)} // Navigate to /book/:vehicleId on click
                  className={`px-6 py-2 rounded text-white ${vehicle.availability ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-500 cursor-not-allowed'}`}
                  disabled={!vehicle.availability}
                >
                  Reserve
                </button>
                <p className={`text-sm ${vehicle.availability ? 'text-green-500' : 'text-red-500'}`}>
                  {vehicle.availability ? 'Available' : 'Not Available'}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No vehicles available based on your filter.</p>
        )}
      </div>
    </div>
  );
};

export default VehicleList;
