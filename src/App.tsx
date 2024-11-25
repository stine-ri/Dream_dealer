import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import SearchBar from './Components/SearchBar';
import FeaturedInventory from './Components/FeaturedInventory';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Register from './Components/Register';
 import VehiclesList from './Components/VehicleList';
import BookVehicle from './Components/BookVehicle'; 
import UserProfile from './Components/UserProfile';
import ContactForm from './Components/ContactForm';
import AboutUs from './Components/AboutUs';
import '@fortawesome/fontawesome-free/css/all.min.css';
const App: React.FC = () => {
  return (
    <div>
      {/* Header remains visible across all pages */}
      <Header />
      <main>
        <Routes>
          {/* Landing page */}
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <SearchBar />
                <FeaturedInventory />
              </>
            }
          />
          {/* Other pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cars" element={<VehiclesList />} />
          <Route path="/book/:vehicleId" element={<BookVehicle />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/contactus" element ={<ContactForm/>}/>
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<About />} />
          */}
        </Routes>
      </main>
      {/* Footer remains visible across all pages */}
      <Footer />
    </div>
  );
};

export default App;
