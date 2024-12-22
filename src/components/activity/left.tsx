"use client";
import React from "react";
import { motion } from "framer-motion";

interface SelfProps {
    style: React.CSSProperties;
    heading: string;
    subheading: string;
    image: string;
  }

const SelfCare
 = ({heading,subheading,image,style}:SelfProps) => {
  return (
    <div className="lg:px-32 sm:px-4 overflow-hidden  ">
      <div className="rounded-xl p-5 mt-10 flex items-center lg:flex-row flex-col " style={style}>
        <motion.div
          className="flex-1"
          initial={{ x: -100, opacity: 0 }} // Start from left and transparent
          whileInView={{ x: 0, opacity: 1 }} // Animate to original position and visible
          viewport={{ amount: 0.2 }} // Trigger when 20% is visible
          transition={{ duration: 1 }} // Animation duration
        >
          <h3 className="text-2xl text-blue-900 font-semibold pb-5">{heading}</h3>
          <p className="text-gray-800 pr-5">
           {subheading}
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
            src={image}
            alt="knowledgegirl"
            className="w-full h-auto" // Make the image responsive
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SelfCare
;
