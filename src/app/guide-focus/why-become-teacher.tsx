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

export function WhyBecomeTeacher() {
  return (
    <section className="w-full max-w-6xl mx-auto flex flex-col items-center px-2 py-10">
      <Typography variant="h2" className="text-center mb-2" color="blue-gray" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        Why Become a Teacher?
      </Typography>
      <Typography
        variant="lead"
        className="mb-16 w-full text-center font-normal !text-gray-500 lg:w-10/12"
        placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
      >
        Becoming a teacher means shaping minds, sparking curiosity, and making a lasting impact. It’s a chance to inspire, guide, and empower students to reach their full potential. Teachers nurture critical thinkers and compassionate individuals, contributing to a better future. It’s not just a profession—it’s a calling to change lives.      </Typography>
      <div className="mt-8">
        <div className="items-center gap-12 mb-24">
          {/* <BackgroundCard title="Expert Instructors">
            Learn from industry professionals with years of hands-on experience
            in React development.
          </BackgroundCard> */}
          <div className="space-y-8 mx-auto">
            <div className="my-4">
              <Option icon={CloudIcon} title="The Power of Teaching: Shaping Futures">
                Choosing to become a teacher means making a lasting difference by shaping young minds and futures. Teachers nurture curiosity, foster personal growth, and ignite a passion for learning. Forget stuffy classrooms—teaching is a dynamic symphony of creativity and impact, where each day offers new opportunities to inspire and guide.
              </Option>
            </div>
            <div className="mb-4 flex gap-4">
              <Option icon={ChartPieIcon} title="The Role of a Teacher: A Conductor of Growth">
                Imagine yourself as a conductor, leading young minds on a journey of discovery. Teachers spark wonder, cultivate critical thinking, and help students blossom into their unique potential. They serve as confidence catalysts and champions of lifelong learning, equipping students with the tools to thrive and succeed.
              </Option>
            </div>
            <Option icon={Cog6ToothIcon} title="Teaching: A Legacy of Fulfillment">
              The most fulfilling melody of teaching is witnessing the impact of your efforts—students achieving, growing, and thriving. Teaching is more than a job; it’s a legacy in the making, a journey of shared growth and knowledge. It’s a calling that feeds the soul, leaving a lasting impact on individuals and society.
            </Option>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyBecomeTeacher;
