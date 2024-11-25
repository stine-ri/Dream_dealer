import React, { useState } from 'react';
import { toast } from 'react-toastify';
import GoBack from './GoBack';
interface UserProfileData {
  name: string;
  email: string;
  phone: string;
  profileImage: string | null; // Update this to allow either a string or null
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserProfileData>({
    name: '',
    email: '',
    phone: '',
    profileImage: null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserData((prevData) => ({ ...prevData, profileImage: imageUrl }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate a successful profile update (you can replace this with your API call)
    setTimeout(() => {
      toast.success('Profile updated successfully!');
    }, 500);
    
    // Optionally log the updated user data for debugging
    console.log(userData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-16">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
      <GoBack/>
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">Update Profile</h2>
        
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <label htmlFor="profileImage" className="cursor-pointer">
            <img
              src={userData.profileImage || '/path/to/default-image.jpg'} // Default image path
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-black"
            />
            <input
              type="file"
              id="profileImage"
              name="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={userData.phone}
              onChange={handleInputChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-red-600 text-white py-2 px-6 rounded-lg hover:bg-red-700 focus:outline-none"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
