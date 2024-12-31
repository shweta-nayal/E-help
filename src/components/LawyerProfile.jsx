import React, { useState } from "react";
import { motion } from "framer-motion";
import CasePieChart from "./CasePieChart"; // Pie chart component
import ProfileImage from "../assets/law1.jpg";

const LawyerProfile = () => {
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center bg-blue-50"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-4/5 bg-white shadow-2xl shadow-gray-600 rounded-lg p-8 flex flex-col md:flex-row gap-8 relative">
        {/* Lawyer's Image and Details */}
        <div className="flex flex-col items-center relative w-full md:w-1/3">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={ProfileImage}
              alt="Lawyer"
              className="rounded-full w-48 h-48 shadow-lg"
            />
            <button
              className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              onClick={() => setShowFullImage(true)}
            >
              <span className="text-white text-xl font-semibold">🔍</span>
            </button>
          </motion.div>
          {showFullImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg p-4 relative">
                <img
                  src={ProfileImage}
                  alt="Lawyer Full"
                  className="rounded-lg shadow-md"
                />
                <button
                  className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full"
                  onClick={() => setShowFullImage(false)}
                >
                  ✖
                </button>
              </div>
            </div>
          )}
          {/* Contact Information Container */}
          <motion.div
            className="bg-gray-100 p-4 mt-4 rounded-lg shadow-lg w-full text-left hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-lg font-semibold text-gray-800">
              Contact Information
            </h3>
            <p className="text-gray-600 mt-2">
              <strong>Name:</strong> John Doe
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> johndoe@example.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +1-234-567-890
            </p>
            <p className="text-gray-600">
              <strong>Office Address:</strong> 123 Law Street, Cityville, USA
            </p>
            <p className="text-gray-600">
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                linkedin.com/in/johndoe
              </a>
            </p>
          </motion.div>
        </div>

        {/* Lawyer's Details */}
        <div className="w-full md:w-2/3 flex flex-col gap-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
            <p className="text-gray-600 text-sm">Senior Advocate</p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800">Bio</h3>
            <p className="text-gray-600">
              John Doe is a seasoned lawyer with over 15 years of experience in
              criminal law, civil litigation, and corporate cases. Known for his
              dedication and strategic thinking, he has successfully represented
              high-profile clients in landmark cases.
            </p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold text-gray-800">
              Notable Cases or Achievements
            </h3>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Won a landmark case on constitutional rights in 2022.</li>
              <li>Awarded "Lawyer of the Year" by XYZ Association in 2020.</li>
              <li>Represented top-tier corporate clients in high-stake disputes.</li>
            </ul>
          </div>
        </div>

        {/* Case Overview */}
        <div className="w-full md:w-1/3 flex flex-col items-center gap-4">
          <h3 className="text-lg font-semibold text-gray-800">Case Overview</h3>
          <div className="w-80 h-80">
            <CasePieChart />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <motion.div
        className="flex justify-center items-center gap-8 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <button
          className="bg-gray-500 text-white px-10 py-4 rounded-full shadow-lg hover:bg-gray-400 hover:scale-105 transition-all duration-300 text-lg"
          onClick={() => window.history.back()}
        >
          Back
        </button>
        <button
          className="bg-blue-600 text-white px-10 py-4 rounded-full shadow-lg hover:bg-blue-500 hover:scale-105 transition-all duration-300 text-lg"
        >
          Connect with Me
        </button>
      </motion.div>
    </motion.div>
  );
};

export default LawyerProfile;
