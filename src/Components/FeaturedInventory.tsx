import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import carOne from '../assets/images/back.jpg';
import carTwo from '../assets/images/2020-lincoln-navigator-lead-image.webp';
import carThree from '../assets/images/cadillac.avif';
import carFour from '../assets/images/hyundai.webp';

const FeaturedInventory: React.FC = () => {
  const navigate = useNavigate();

  const cars = [
    { id: 1, name: '2018 Jaguar F-Type R', price: '$86,699', image: carOne },
    { id: 2, name: '2024 Lincoln Navigator', price: '$65,000', image: carTwo },
    { id: 3, name: '2023 Cadillac Escalade', price: '$72,500', image: carThree },
    { id: 4, name: '2024 Hyundai Santa Fe', price: '$81,200', image: carFour },
  ];

  return (
    <div className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Featured Inventory</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="text-center border border-gray-200 rounded-lg p-4 shadow transition-transform duration-200 hover:scale-105"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-[300px] h-[200px] object-cover rounded mb-4"
            />
            <p className="font-bold text-lg">{car.name}</p>
            <p className="text-gray-600 mb-2">{car.price}</p>
            <button
              className="mt-4 px-6 py-3 bg-black text-white rounded hover:bg-red-500"
              onClick={() => navigate('/cars')} // Navigate to /cars
            >
              View Special Offer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedInventory;
