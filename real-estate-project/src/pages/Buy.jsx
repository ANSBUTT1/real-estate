import React from 'react'
import CardComponent from '../components/CardComponent'

const Buy = () => {
  const cardData = [
    {
      price: "PKR 45,000,000",
      type: "House",
      portion: "Lower Portion",
      area: "1 Kanal",
      location: "Islamabad",
      beds: 5,
      toilets: 4,
      imageUrl:
        "https://www.graana.com/_next/image/?url=https%3A%2F%2Fimages.graana.com%2Fimages%2Foriginal%2Fg8jzfkonwiedsqxwbtu0%2F1538827978_jpg&w=640&q=75",
      uploadedTime: "2 days ago",
    },
    {
      price: "PKR 35,000,000",
      type: "Apartment",
      portion: "Upper Portion",
      area: "10 Marla",
      location: "Lahore",
      beds: 3,
      toilets: 2,
      imageUrl:
        "https://www.graana.com/_next/image/?url=https%3A%2F%2Fimages.graana.com%2Fimages%2Foriginal%2Fsfcn2fx5wlrsatnllskg%2F1538578960_jpg&w=640&q=75",
      uploadedTime: "5 days ago",
    },
    {
      price: "PKR 70,000,000",
      type: "House",
      portion: "Lower Portion",
      area: "2 Kanal",
      location: "Karachi",
      beds: 7,
      toilets: 5,
      imageUrl:
        "https://www.graana.com/_next/image/?url=https%3A%2F%2Fimages.graana.com%2Fimages%2Foriginal%2Fh3vjpkkdzqz1fiyv9rjm%2F1538576439_jpg&w=640&q=75",
      uploadedTime: "1 week ago",
    },
    {
      price: "PKR 50,000,000",
      type: "Apartment",
      portion: "Full Apartment",
      area: "1 Kanal",
      location: "Islamabad",
      beds: 4,
      toilets: 3,
      imageUrl:
        "https://www.graana.com/_next/image/?url=https%3A%2F%2Fimages.graana.com%2Fimages%2Foriginal%2Fgecquh38hfhzncokqing%2F1538492587_jpg&w=640&q=75",
      uploadedTime: "3 days ago",
    },
    {
      price: "PKR 60,000,000",
      type: "House",
      portion: "Upper Portion",
      area: "1.5 Kanal",
      location: "Rawalpindi",
      beds: 6,
      toilets: 4,
      imageUrl:
        "https://www.graana.com/_next/image/?url=https%3A%2F%2Fimages.graana.com%2Fimages%2Foriginal%2Fnr1nmcplhlh0xswknnk0%2F1538491282_jpg&w=640&q=75",
      uploadedTime: "4 days ago",
    },
    {
      price: "PKR 20,000,000",
      type: "House",
      portion: "Lower Portion",
      area: "1 Kanal",
      location: "Faisalabad",
      beds: 3,
      toilets: 2,
      imageUrl:
        "https://www.graana.com/_next/image/?url=https%3A%2F%2Fimages.graana.com%2Fimages%2Foriginal%2Fynwsqi7rftw8ghskygll%2F1538580156_jpg&w=640&q=75",
      uploadedTime: "1 day ago",
    },
    {
      price: "PKR 90,000,000",
      type: "Villa",
      portion: "Full Villa",
      area: "3 Kanal",
      location: "Peshawar",
      beds: 8,
      toilets: 6,
      imageUrl:
        "https://www.graana.com/_next/image/?url=https%3A%2F%2Fimages.graana.com%2Fimages%2Foriginal%2Fsfbk12wxnntkl4fwzwyu%2F1701674944_jpg&w=640&q=75",
      uploadedTime: "2 weeks ago",
    },
    {
      price: "PKR 25,000,000",
      type: "Apartment",
      portion: "Upper Portion",
      area: "2 Marla",
      location: "Multan",
      beds: 2,
      toilets: 1,
      imageUrl:
        "https://www.graana.com/_next/image/?url=https%3A%2F%2Fimages.graana.com%2Fimages%2Foriginal%2Faqr8wheqkg9lccxfsaei%2F1538575712_jpg&w=640&q=75",
      uploadedTime: "6 days ago",
    },
    {
      price: "PKR 55,000,000",
      type: "House",
      portion: "Lower Portion",
      area: "1 Kanal",
      location: "Quetta",
      beds: 5,
      toilets: 4,
      imageUrl:
        "https://www.graana.com/_next/image/?url=https%3A%2F%2Fimages.graana.com%2Fimages%2Foriginal%2Fe1vazxbkl9d07lullx8k%2F1561527183_jpg&w=640&q=75",
      uploadedTime: "3 days ago",
    },
    // New added cards
    {
      price: "PKR 40,000,000",
      type: "House",
      portion: "Full House",
      area: "1 Kanal",
      location: "Islamabad",
      beds: 4,
      toilets: 3,
      imageUrl:
        "",
      uploadedTime: "4 days ago",
    },
    {
      price: "PKR 75,000,000",
      type: "Villa",
      portion: "Upper Villa",
      area: "2 Kanal",
      location: "Karachi",
      beds: 6,
      toilets: 5,
      imageUrl:
        "",
      uploadedTime: "1 week ago",
    },
    {
      price: "PKR 30,000,000",
      type: "Apartment",
      portion: "Lower Portion",
      area: "15 Marla",
      location: "Rawalpindi",
      beds: 4,
      toilets: 3,
      imageUrl:
        "",
      uploadedTime: "7 days ago",
    },
    {
      price: "PKR 80,000,000",
      type: "House",
      portion: "Full House",
      area: "3 Kanal",
      location: "Peshawar",
      beds: 7,
      toilets: 6,
      imageUrl:
        "",
      uploadedTime: "10 days ago",
    },
    {
      price: "PKR 28,000,000",
      type: "Apartment",
      portion: "Full Apartment",
      area: "1 Kanal",
      location: "Lahore",
      beds: 3,
      toilets: 2,
      imageUrl:
        "",
      uploadedTime: "6 days ago",
    },
    {
      price: "PKR 38,000,000",
      type: "Villa",
      portion: "Full Villa",
      area: "1.5 Kanal",
      location: "Karachi",
      beds: 5,
      toilets: 4,
      imageUrl:
        "",
      uploadedTime: "2 days ago",
    },
    {
      price: "PKR 32,000,000",
      type: "House",
      portion: "Lower Portion",
      area: "1 Kanal",
      location: "Faisalabad",
      beds: 4,
      toilets: 3,
      imageUrl:
        "",
      uploadedTime: "5 days ago",
    },
    // other data items
  ];

  const locations = [
    "All",
    "Islamabad",
    "Rawalpindi",
    "Lahore",
    "Karachi",
    "Peshawar",
  ];
  const title = "Top Areas by City";
  const titleTwo = "Recent Properties for Rent";
  const titleThree = "Recent Properties for Sale";
  return (
    <div>
       <CardComponent cardData={cardData} locations={locations} title={title} />
      <CardComponent
        cardData={cardData}
        locations={locations}
        title={titleTwo}
      />
      <CardComponent
        cardData={cardData}
        locations={locations}
        title={titleThree}
      />
   
    </div>
  )
}

export default Buy
