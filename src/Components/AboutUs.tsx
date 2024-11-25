import React from "react";
import visionImage from "../assets/images/2020-lincoln-navigator-lead-image.webp"; // Assuming image paths
import approachImage from "../assets/images/cadillac.avif";
import processImage from "../assets/images/hyundai.webp";
import GoBack from "./GoBack";
const AboutUs: React.FC = () => {
  return (
    
    <div className="bg-gray-50">
      <div className="container mx-auto px-6 py-20"> {/* Increased padding at the top */}
      <GoBack/>
        <h1 className="text-4xl font-extrabold text-center mb-12 text-red-600">About Us</h1> {/* Red color added */}

        {/* Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-red-600 mb-4">Our Vision</h2> {/* Red color added */}
            <p className="text-gray-600">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.
            </p>
          </div>
          <div>
            <img
              src={visionImage}
              alt="Vision"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Approach Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-red-600 mb-4">Our Approach</h2> {/* Red color added */}
            <p className="text-gray-600">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.
            </p>
          </div>
          <div>
            <img
              src={approachImage}
              alt="Approach"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Process Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-semibold text-red-600 mb-4">Our Process</h2> {/* Red color added */}
            <p className="text-gray-600">
              A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy.
            </p>
          </div>
          <div>
            <img
              src={processImage}
              alt="Process"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
