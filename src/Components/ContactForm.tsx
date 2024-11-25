import React from "react";
import GoBack from "./GoBack";
const ContactForm: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Add spacing from the header */}
      <div className="mt-16 w-full max-w-6xl px-4">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form Section */}
            <div>
            <GoBack/>
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <form className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Phone Input */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="Enter your phone number"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Write your message here"
                    className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Information Section */}
            <div className="bg-gray-800 text-white rounded-lg p-8 space-y-8">
              <h2 className="text-2xl font-bold">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <i className="fas fa-phone text-xl"></i>
                  <p>+254 7 6902-8531</p>
                </div>
                <div className="flex items-center gap-4">
                  <i className="fas fa-envelope text-xl"></i>
                  <p>info@dreamdealer.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-linkedin text-xl"></i>
                  </a>
                  <a href="#" className="text-white hover:text-gray-400">
                    <i className="fab fa-pinterest text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
