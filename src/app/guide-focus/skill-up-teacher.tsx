"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ChartPieIcon,
  CloudArrowDownIcon,
  CloudIcon,
  Cog6ToothIcon,
  KeyIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

interface OptionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
  return (
    <div className="flex gap-4">
      <div className="mb-4">
        <Icon className="text-gray-900 h-6 w-6" />
      </div>
      <div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 w-full font-normal !text-gray-500">
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function SkillUpTeacher() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray">
        The Need for Teachers to Upskill for the Future
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
      >
        Education is a dynamic adventure, and teachers are the explorers guiding students through it. To stay ahead, teachers must continuously upskill. Digital tools are treasure troves that, when integrated properly, make lessons more engaging and interactive. Data-driven insights empower teachers to personalize learning, catering to each student’s unique needs. Upskilling also equips teachers with new strategies, enhancing their ability to address diverse learning styles. As the skills students need evolve, teachers must adapt to prepare them for a future reliant on adaptability and technology. By upskilling, teachers become future-proof educators, creating more inclusive, engaging, and effective learning environments.
      </Typography>
    </section>
  );
}

export default SkillUpTeacher;
