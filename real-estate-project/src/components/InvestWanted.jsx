import React from "react";
// import invest from "../assets/invest.png";
// import wanted from "../assets/wanted.png";

const InvestWanted = () => {
  return (
    <div className="flex py-16 flex-col items-center justify-center px-6 bg-secondary dark:bg-primary md:px-16 lg:px-24">
      {/* Invest Section - Image on the right and text on the left */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 text-center md:text-left mb-16">
        <div className="max-w-xs md:max-w-sm lg:max-w-md text-center md:text-left">
          <h1 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Invest in Your Future</h1>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
            Discover fully legal and certified Imarat projects. Our approach, which includes Ownerships & Approvals, Demand & Delivery, ensures excellent returns with minimized risk. Take advantage of trusted and verified projects to secure your financial future.
          </p>
          <button className="px-6 py-2 bg-primary text-secondary font-semibold rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            INVEST NOW
          </button>
        </div>
        <div className="mb-4 w-full md:w-1/2 lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="invest"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Wanted Section - Image on the left and text on the right */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 text-center md:text-left">
        <div className="mb-4 w-full md:w-1/2 lg:w-1/2">
          <img
            src="https://images.pexels.com/photos/534219/pexels-photo-534219.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="wanted"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        <div className="max-w-xs md:max-w-sm lg:max-w-md text-center md:text-left">
          <h1 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Wanted</h1>
          <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
            Need help finding the perfect property? In just 3 clicks, you can activate a team of experts who will search, evaluate, and secure the properties that match your needs. It's easy, fast, and efficient—let us find your dream property today.
          </p>
          <button className="px-6 py-2 bg-primary text-secondary font-semibold rounded-lg hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            WANTED NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvestWanted;
