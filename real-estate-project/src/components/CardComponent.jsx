import React, { useState } from "react";
import { FaBed, FaShower, FaClock } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import wanted from "../assets/wanted.png"; // Import the wanted image

const CardComponent = ({ cardData, locations, title }) => {
  const [selectedLocation, setSelectedLocation] = useState("All");

  const filteredCards =
    selectedLocation === "All"
      ? cardData
      : cardData.filter((card) => card.location === selectedLocation);

  return (
    <div className="px-6 md:px-16 py-8 dark:bg-primary/80">
      <div>
        <h1 className="text-2xl font-bold mb-4 dark:text-secondary">{title}</h1>
      </div>

      {/* Filter Navigation */}
      <div className="flex justify-between items-center mb-4">
      <nav>
  <ul className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-6 gap-4">
    {locations.map((location) => (
      <li key={location}>
        <button
          onClick={() => setSelectedLocation(location)}
          className={`${
            selectedLocation === location
              ? "bg-primary text-secondary"
              : "text-primary dark:text-secondary"
          } p-2 rounded-md transition duration-300 font-semibold w-full`}
        >
          {location}
        </button>
      </li>
    ))}
  </ul>
</nav>

      </div>

      {/* Property Listings */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={false}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        {filteredCards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white dark:bg-primary hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
              <div className="relative">
                {/* If imageUrl exists, show the property image, else show the 'wanted' image */}
                <img
                  src={card.imageUrl || wanted}
                  alt="Property"
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="flex flex-col p-4 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="text-md font-semibold text-gray-800 dark:text-secondary">
                    {card.price}
                  </div>
                  <div className="font-medium text-xs bg-primary dark:bg-secondary dark:text-primary text-secondary p-2 rounded-full w-24 h-8 flex items-center justify-center">
                    {card.type}
                  </div>
                </div>
                <div className="space-y-2 text-sm dark:text-secondary">
                  <div className="font-medium text-sm">{card.portion}</div>
                  <div className="flex justify-between items-center gap-2">
                    <div className="text-xs">Area: {card.area}</div>
                    <div className="text-xs">Location: {card.location}</div>
                  </div>
                </div>
                <div className="flex justify-between text-sm dark:text-secondary">
                  <div className="flex items-center">
                    <FaBed className="mr-2" /> <span>{card.beds} Beds</span>
                  </div>
                  <div className="flex items-center">
                    <FaShower className="mr-2" /> <span>{card.toilets} Toilets</span>
                  </div>
                </div>
                <div className="flex items-center text-xs text-gray-500 dark:text-secondary">
                  <FaClock className="mr-2" />
                  <span>Uploaded {card.uploadedTime}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardComponent;
