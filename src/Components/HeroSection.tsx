import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/images/hero.avif';

const HeroSection: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigate hook

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirect to the /register page
  };

  return (
    <div className="relative bg-black text-white">
      <img src={heroImage} alt="Hero Car" className="w-full h-[500px] object-cover opacity-75" />
      <div className="absolute top-1/4 left-10">
        <h1 className="text-4xl font-bold">Dream F-Type</h1>
        <p className="text-xl mt-4">Starting at <span className="font-bold">$55,000</span></p>
        <button
          onClick={handleRegisterRedirect} // Call handleRegisterRedirect on button click
          className="mt-6 px-6 py-3 bg-red-600 text-white font-medium"
        >
          Get One Today
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
