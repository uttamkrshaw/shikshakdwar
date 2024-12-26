"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const OTHER_COURSES = [
  {
    img: "/image/offerings/teacher.jpg",
    title: "Membership Programs",
    desc: "Enhance your teaching skills with advanced techniques and methodologies designed to foster student engagement and success.",
    buttonLabel: "Explore",
    link: "/membership"
  },
  {
    img: "/image/offerings/tefl.jpg",
    title: "HR Services",
    desc: "Gain the knowledge and skills to effectively teach English abroad, with a focus on language acquisition, lesson planning, and classroom management.",
    buttonLabel: "Explore",
    link: "/hr-services"
  },
  {
    img: "/image/offerings/academic.jpg",
    title: "Teams & Advisors",
    desc: "Explore a variety of in-depth academic courses, tailored to provide you with the knowledge and expertise needed for career advancement.",
    buttonLabel: "Explore",
    link: "/our-team"

  },
  {
    img: "/image/offerings/cyber.jpg",
    title: "Career",
    desc: "Prepare for the growing demand in cyber security with hands-on training in protecting systems and data from evolving threats.",
    buttonLabel: "Explore",
    link: "/career"

  },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        {/* <Typography variant="h2" color="blue-gray" className="mb-4">
          Our Courses
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Looking to elevate your skills? Browse through 1,000+
          courses and find the one that fits your needs.
        </Typography> */}
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {OTHER_COURSES.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;