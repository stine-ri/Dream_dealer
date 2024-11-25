import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const GoBack: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div
      onClick={handleGoBack}
      className="flex items-center justify-start px-4 py-2 border-2 border-red-500 rounded-full text-red-500 cursor-pointer text-sm transition-colors duration-300 ease-in-out w-20 hover:bg-red-500 hover:text-white"
    >
      <FontAwesomeIcon icon={faArrowLeft} className="mr-2 text-lg" />
      <span>Back</span>
    </div>
  );
};

export default GoBack;
