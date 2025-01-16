import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const AreaGuides = () => {
  const [selectedArea, setSelectedArea] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  // Sample areas (replace with dynamic data as needed)
  const areas = [
    'Karachi', 
    'Lahore', 
    'Islamabad', 
    'Rawalpindi', 
    'Peshawar', 
    'Quetta',
    'Multan',
    'Faisalabad',
    'Sialkot'
  ];

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
    setShowDropdown(false); // Hide dropdown after selection
  };

  return (
    <div className="w-full h-screen bg-grayColor dark:bg-primary">
      <div className="grid grid-cols-1 md:grid-cols-[600px,_1fr] h-full">
        {/* Left Side - Content */}
        <div className="flex flex-col justify-center items-start px-6 md:px-16 py-8 space-y-4">
          <h1 className="text-3xl font-bold text-primary dark:text-secondary">Area Guides</h1>
          <p className="text-lg text-primary dark:text-secondary">
            View schools, health services, parks, security index, and other details of any area.
          </p>
          <div className="relative w-full">
            {/* Search input */}
            <input
              type="search"
              placeholder="Search for an area..."
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="w-full pl-12 md:pr-32 py-3 text-lg outline-none rounded-lg bg-white text-black dark:bg-black dark:text-white border border-gray-300  dark:focus:ring-secondary"
            />
            {/* Search icon inside input */}
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-white" />

            {/* Dropdown button */}
            <button
              type="button"
              onClick={() => setShowDropdown(!showDropdown)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary dark:bg-primary dark:text-secondary rounded-full p-2 focus:outline-none"
            >
              ▼
            </button>

            {/* Dropdown list */}
            {showDropdown && (
              <div className="absolute left-0 right-0 mt-2 text-primary dark:text-secondary bg-secondary dark:bg-primary border border-gray-300 rounded-lg shadow-lg z-10">
                {areas
                  .filter(area => area.toLowerCase().includes(selectedArea.toLowerCase())) // Filter areas based on input
                  .map((area, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer"
                      onClick={() => handleAreaSelect(area)} // Select area on click
                    >
                      {area}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:block relative">
          <img
            src="https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="area background"
            className="w-full h-screen object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default AreaGuides;
