"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyUs = () => {
  return (
    <div className="lg:px-32 sm:px-4 overflow-hidden  ">
      <div className="rounded-xl p-5 flex items-center lg:flex-row flex-col gap-5 ">
        <motion.div
          className="flex-1"
          initial={{ x: -100, opacity: 0 }} // Start from left and transparent
          whileInView={{ x: 0, opacity: 1 }} // Animate to original position and visible
          viewport={{ amount: 0.2 }} // Trigger when 20% is visible
          transition={{ duration: 1 }} // Animation duration
        >
          <h3 className="pl-36 pt-1 mb-10 text-4xl font-bold">Why Choose Shikshakdwar?</h3>

          <p className="text-gray-800 pr-5  text-lg ">
            <strong> Shikshakdwar Learning Credo LLP </strong>  is dedicated to empowering learners of all ages to up-skill, re-skill, and pursue lifelong learning. We offer a comprehensive platform for those seeking globally recognized, accredited courses.

          </p>
          <p className="text-gray-800 pr-5 text-lg">
            Our online courses provide flexibility and accessibility, allowing you to learn from anywhere at your own pace. Our training workshops are supported by highly qualified professionals and experienced mentors from the industry, ensuring you receive expert guidance.

          </p>
          <p className="text-gray-800 pr-5 text-lg">
            We are committed to helping students, teachers, and individuals bridge learning gaps and articulate their knowledge effectively. Our goal is to provide the best products and services within the teacher and student community, offering exceptional value and a strong online presence.
          </p>
          <h4 className="pt-1 mb-10 text-2xl font-bold">Education is the First Line of Defense - Inspire, Learn, Empower! </h4>

        </motion.div>

        <motion.div
          className="flex-1"
          initial={{ x: 100, opacity: 0 }} // Start from right and transparent
          whileInView={{ x: 0, opacity: 1 }} // Animate to original position and visible
          viewport={{ amount: 0.2 }} // Trigger when 20% is visible
          transition={{ duration: 1 }} // Animation duration
        >
          <img
            src={"/image/full_img_1_9.jpg"}
            alt="knowledgegirl"
            className="w-full h-auto" // Make the image responsive
          />
        </motion.div>

      </div>
    </div>
  );
};

export default WhyUs
  ;
