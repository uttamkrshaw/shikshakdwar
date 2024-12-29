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
        <Typography variant="h5" color="blue-gray" className="mb-2" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {title}
        </Typography>
        <Typography className="mb-2 md:w-10/12 w-full font-normal !text-gray-500" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          {children}
        </Typography>
      </div>
    </div>
  );
}

export function RoleTeacher() {
  return (
    <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-2">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        The Role and Responsibilities of a Teacher?
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
        placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
      >
        A teacher’s role extends beyond instruction; they inspire, guide, and support students in their learning journey. Teachers foster critical thinking, creativity, and personal growth, creating a safe and inclusive environment. They act as mentors, role models, and motivators, shaping individuals to reach their potential and contribute meaningfully to society.
      </Typography>
      <div className="mt-8">
        <div className="items-center gap-12 mb-24">
          {/* <BackgroundCard title="Expert Instructors">
            Learn from industry professionals with years of hands-on experience
            in React development.
          </BackgroundCard> */}
          <div className="space-y-8 mx-auto">
            <div className="my-4">
              <Option icon={CloudIcon} title="Characteristics of an Ideal Teacher">
                An ideal teacher embodies compassion, passion, and patience, understanding each student’s background and needs. They inspire through role modeling, effective communication, and dedication, fostering curiosity and a love for learning. By embracing inclusivity and celebrating individuality, they create supportive, equitable environments that nurture growth and leave lasting, positive impacts.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={ChartPieIcon} title="The Role of a Teacher: A Conductor of Growth">
                Teachers are artists, shaping young minds with knowledge, passion, and care. They ignite curiosity, nurture dreams, and guide students to develop their strengths and overcome challenges. Beyond academics, they empower future leaders by fostering critical thinking, confidence, and individuality, leaving a lasting legacy of growth, inspiration, and transformation.
              </Option>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoleTeacher;
