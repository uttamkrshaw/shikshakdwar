"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Use `next/navigation` for App Router

const AllCarbonCard: React.FC = () => {
  const router = useRouter();

  const cards = [
    {
      id: 1,
      image: "/image/carbonFootprint/Institutions.jpg", // Replace with actual image paths
      title: "Institutions",
      route: "/institutions", // Define the route for each card
    },
    {
      id: 2,
      image: "/image/carbonFootprint/Corporate.jpg",
      title: "Corporate",
      route: "/corporate",
    },
    {
      id: 3,
      image: "/image/carbonFootprint/Hospitals.jpg",
      title: "Hospitals",
      route: "/hospitals",
    },
  ];

  const handleCardClick = (route: string) => {
    router.push(route); // Navigate to the specified route
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-6 bg-gray-100 mt-10">
      {cards.map((card) => (
        <div
          key={card.id}
          onClick={() => handleCardClick(card.route)} // Add the click event
          className="bg-white shadow-lg rounded-lg overflow-hidden w-80 flex flex-col items-center text-center cursor-pointer hover:shadow-xl transition duration-300"
        >
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4 flex justify-between items-center w-full">
            <h3 className="text-xl font-semibold">{card.title}</h3>
            <div className="text-blue-500 text-2xl font-bold">➔</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCarbonCard;
