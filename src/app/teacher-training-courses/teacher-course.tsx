"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";

const FEATURES = [
  {
    icon: InboxIcon,
    title: "Accredited Training and Certification",
    description:
      "Ensuring that our educators receive recognition for their commitment to excellence in teaching",
  },
  {
    icon: AcademicCapIcon,
    title: "International Teaching Certificates",
    description:
      "Our certifications are designed to open doors for teaching opportunities globally",
  },
  {
    icon: CheckBadgeIcon,
    title: "Highly Qualified Trainers",
    description: "Our faculty comprises experienced professionals dedicated to providing the highest standard of education",
  },
  {
    icon: CheckBadgeIcon,
    title: "Globally Recognised Certificates",
    description: "Our graduates enjoy the prestige of holding qualifications that are respected worldwide",
  },
  {
    icon: CheckBadgeIcon,
    title: "Affordable Fees with Instalment Options",
    description: "We believe in making quality education accessible, offering flexible payment solutions",
  },
  {
    icon: CheckBadgeIcon,
    title: "24/7 Online Course Access",
    description: "Catering to our international audience, our courses are available around the clock",
  },
  {
    icon: CheckBadgeIcon,
    title: "100% Placement Assistance",
    description: "We are committed to supporting our graduates in securing positions in leading educational institutions",
  }
];

export function TeacherCourse() {
  return (
    <section className="py-12 px-8">
      <div className="container mx-auto  place-items-center">
        {/* <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={768}
            height={500}
            src="/image/teacher/course.jpg"
            className="h-full max-h-[500px] w-full object-cover scale-110"
            alt="online course"
          />
        </div> */}
        <div className="col-span-2 lg:pl-24">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            About Course
          </Typography>
          <Typography
            variant="lead"
            className="mb-5 max-w-fit px-4 text-left text-lg !text-gray-500 lg:px-0"
          >
            The London College of Teachers and Trainers (LCTT), a distinguished global teaching institute, specializes in delivering an extensive array of teacher training courses designed to meet the diverse requirements of educators worldwide.
            A UK-registered institution, LCTT prides itself on offering superior quality education to both seasoned and aspiring teachers. These courses are flexibly offered through online, distance learning, or traditional classroom settings, catering to the varied preferences of our international student body.
            With a vast network of trainees spanning over 85 countries, LCTT has successfully equipped countless educators, facilitating their placement in prestigious institutions around the world.
          </Typography>
          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeacherCourse;
