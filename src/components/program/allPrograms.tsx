"use client";

import Link from "next/link";

const programs = [
  {
    title: "Academic Programs",
    description:
      "Laying the foundation for lifelong success through comprehensive and specialized learning.",
    image: "/image/program/pink_bg.jpg",
    link: "/academic-programs",
  },
  {
    title: "Cognitive Learning Mastery",
    description:
      "Master the art of critical and creative thinking with advanced techniques and tools.",
    image: "/image/program/acadmic_bg.png",
    link: "/cognitive-learning",
  },
  {
    title: "Cyber Security Programs",
    description:
      "Safeguard the digital world by gaining cutting-edge expertise in cybersecurity.",
    image: "/image/program/cyber_bg.jpg",
    link: "/cyber-security-programs",
  },
];

const AllPrograms = () => {
  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Our Programs</h1>
        <p className="text-lg text-gray-600 mb-12">
          Explore our range of programs designed to empower you with knowledge
          and skills for the future.
        </p>
        <div className="cursor-pointer p-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <Link
              key={index}
              href={program.link} // Use Link for navigation
              className="relative group w-56 h-56 sm:w-72 sm:h-72 flex items-center justify-center transform rotate-45 bg-white shadow-md overflow-hidden"
            >
              <img
                src={program.image}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center rotate-[-45deg]">
                <h2 className="text-xl sm:text-2xl font-semibold text-white mb-2">
                  {program.title}
                </h2>
                <p>Explore</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPrograms;
