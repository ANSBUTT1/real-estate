import React from "react";
import { FaSearch } from "react-icons/fa"; // Import the search icon from react-icons

const HomeHeroSection = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(https://www.graana.com/_next/image/?url=%2Fhome-page-images%2FHeaderImage.png&w=1920&q=75)`,
      }}
    > 
      {/* Main content container */}
      <div className="px-4 py-24 lg:px-16 flex justify-start md:justify-center items-center h-full bg-white bg-opacity-20 dark:bg-black dark:bg-opacity-20">
        {/* Hero text section */}
        <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-10 text-center lg:text-left max-w-5xl">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-semibold text-primary dark:text-white">
              Find Your Dream Home with Confidence
            </h1>
            <p className="text-lg text-primary dark:text-gray-200">
              Whether you're looking to buy, rent, or sell a property, we provide the most trusted real estate services to help you make informed decisions.
            </p>
            <div className="flex justify-center lg:justify-start gap-6">
              {/* Buttons Section */}
              <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-all duration-300 active:bg-black active:text-white dark:bg-secondary dark:text-primary dark:hover:bg-opacity-80 dark:active:bg-black dark:active:text-white">
                Buy a Home
              </button>
              <button className="bg-secondary text-primary px-6 py-3 rounded-md hover:bg-opacity-80 transition-all duration-300 active:bg-black active:text-white dark:bg-primary dark:text-white dark:hover:bg-opacity-80 dark:active:bg-black dark:active:text-white">
                Rent a Home
              </button>
            </div>
            <div className="mt-6 flex justify-center lg:justify-start items-center gap-4">
              <input
                type="search"
                placeholder="Search for properties..."
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white transition-all duration-300"
              />
              <button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-80 transition-all duration-300 dark:bg-primary dark:text-white dark:hover:bg-opacity-80">
                <FaSearch size={20} /> {/* Use the FaSearch icon here */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroSection;
