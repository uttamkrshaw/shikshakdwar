"use client";
import React from "react";
import { motion } from "framer-motion";

const SelfCare = () => {
  return (
    <div className="lg:px-32 sm:px-4 overflow-hidden">
      <h2 className="pl-10 py-10 text-4xl font-medium">Knowledge Enhancement</h2>
      <div className="p-5 bg-[#CBDDF5] flex items-center lg:flex-row flex-col">
        <motion.div
          className="flex-1"
          initial={{ x: -100, opacity: 0 }} // Start from left and transparent
          whileInView={{ x: 0, opacity: 1 }} // Animate to original position and visible
          viewport={{ amount: 0.2 }} // Trigger when 20% is visible
          transition={{ duration: 1 }} // Animation duration
        >
          <h3 className="text-2xl text-blue-900 font-medium pb-5">SELF CARE FOR EDUCATORS</h3>
          <p className="text-gray-800 pr-5">
            Teaching takes a lot of energy, both physical and mental. Self-care is not just a luxury for teachers; it is a necessity. For would-be teachers, establishing healthy self-care habits early in their careers can contribute to a more sustainable and fulfilling professional journey.
          </p>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }} // Start from right and transparent
          whileInView={{ x: 0, opacity: 1 }} // Animate to original position and visible
          viewport={{ amount: 0.2 }} // Trigger when 20% is visible
          transition={{ duration: 1 }} // Animation duration
        >
          <img
            src="/image/activities/Knowledge_girl.jpg"
            alt="knowledgegirl"
            className="w-full h-auto" // Make the image responsive
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SelfCare;
