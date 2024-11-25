import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import images for demonstration
import teslaModelS from '../assets/images/cadillac.avif';
import teslaModelX from '../assets/images/back.jpg';
import bmwM3 from '../assets/images/2020-lincoln-navigator-lead-image.webp';

const vehicleData = [
  {
    id: 1,
    name: 'Tesla Model S',
    image: teslaModelS,
    rentalRate: 124,
    passengers: 5,
    features: ['Electric', 'Unlimited mileage'],
  },
  {
    id: 2,
    name: 'Tesla Model X',
    image: teslaModelX,
    rentalRate: 136,
    passengers: 5,
    features: ['Electric', 'Unlimited mileage'],
  },
  {
    id: 3,
    name: 'BMW M3',
    image: bmwM3,
    rentalRate: 150,
    passengers: 4,
    features: ['Sporty', 'Premium'],
  },
];

const BookVehicle: React.FC = () => {
  const { vehicleId } = useParams<{ vehicleId: string }>();
  const navigate = useNavigate();

  // Find the vehicle using the ID
  const vehicle = vehicleData.find((v) => v.id === Number(vehicleId));

  if (!vehicle) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-red-500">Vehicle Not Found</h1>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Back to Vehicles
        </button>
      </div>
    );
  }

  const handleBooking = () => {
    // Show toast notification
    toast.success('Car booked successfully!', {
      position: 'top-right',
      autoClose: 3000,
    });

    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-3/4 max-w-screen-lg">
        {/* Vehicle Details */}
        <div className="w-full md:w-1/2">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h2 className="text-2xl font-bold mt-4">{vehicle.name}</h2>
          <p className="text-gray-700 mt-2">Passengers: {vehicle.passengers}</p>
          <p className="text-gray-700 mt-2">Features: {vehicle.features.join(', ')}</p>
          <p className="text-gray-800 font-bold text-xl mt-4">${vehicle.rentalRate}/day</p>
        </div>

        {/* Booking Form */}
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-semibold mb-4">Booking Details</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Pick-Up Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Return Date</label>
              <input
                type="date"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <button
              type="button"
              onClick={handleBooking}
              className="w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookVehicle;
