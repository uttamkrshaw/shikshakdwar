"use client";
import React from "react";
import { motion } from "framer-motion";
import HeroVideoDialog from "@/components/ui/hero-video-dialog";

export function HeroVideoDialogDemo() {
  return (
    <div className="relative">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}


interface SelfProps {
  heading: string;
  subheading: string;
  subheading1: string;
  subheading2: string;
  image: string;
}

const DestinationCard
  = ({ heading, subheading, image, subheading1, subheading2 }: SelfProps) => {
    return (
      <div className="lg:px-32 sm:px-4 overflow-hidden">
        <h3 className="text-center pt-10 pb-3 text-4xl font-medium text-purple-900">{heading}</h3>
        <div className="rounded-xl p-5 flex items-center lg:flex-row flex-col ">
          <motion.div
            className="flex-1"
            initial={{ x: -100, opacity: 0 }} // Start from left and transparent
            whileInView={{ x: 0, opacity: 1 }} // Animate to original position and visible
            viewport={{ amount: 0.2 }} // Trigger when 20% is visible
            transition={{ duration: 1 }} // Animation duration
          >
            <p className="text-gray-800 lg:pr-5 text-lg">
              {subheading}
            </p>
            <p className="text-gray-800 lg:pr-5 text-lg">
              {subheading1}
            </p>
            <p className="text-gray-800 lg:pr-5 text-lg">
              {subheading2}
            </p>
          </motion.div>
          <motion.div
            className="flex-1"
            initial={{ x: 100, opacity: 0 }} // Start from right and transparent
            whileInView={{ x: 0, opacity: 1 }} // Animate to original position and visible
            viewport={{ amount: 0.2 }} // Trigger when 20% is visible
            transition={{ duration: 1 }} // Animation duration
          >
            {/* <img
              src={image}
              alt="knowledgegirl"
              className="w-full h-auto" // Make the image responsive
            /> */}
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
              thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
              thumbnailAlt="Hero Video"
            />
          </motion.div>
        </div>
      </div>
    );
  };

export default DestinationCard
  ;
