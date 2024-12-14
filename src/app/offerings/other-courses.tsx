"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const OTHER_COURSES = [
  {
    img: "/image/offerings/teacher.jpg",
    title: "Teacher Training Courses",
    desc: "Enhance your teaching skills with advanced techniques and methodologies designed to foster student engagement and success.",
    buttonLabel: "Explore",
    link: "/teacher-training-courses"
  },
  {
    img: "/image/offerings/tefl.jpg",
    title: "Teaching English as a Foreign Language certification",
    desc: "Gain the knowledge and skills to effectively teach English abroad, with a focus on language acquisition, lesson planning, and classroom management.",
    buttonLabel: "Explore",
    link: "/teacher-training-courses"
  },
  {
    img: "/image/offerings/academic.jpg",
    title: "Academic Programs",
    desc: "Explore a variety of in-depth academic courses, tailored to provide you with the knowledge and expertise needed for career advancement.",
    buttonLabel: "Explore",
    link: "/teacher-training-courses"

  },
  {
    img: "/image/offerings/cyber.jpg",
    title: "Cyber Security Programs",
    desc: "Prepare for the growing demand in cyber security with hands-on training in protecting systems and data from evolving threats.",
    buttonLabel: "Explore",
    link: "/teacher-training-courses"

  },
  {
    img: "/image/offerings/cognitive.jpg",
    title: "Cognitive Learning Mastery",
    desc: "Unlock the potential of cognitive learning theories to improve memory, problem-solving, and critical thinking in your teaching methods.",
    buttonLabel: "Explore",
    link: "/teacher-training-courses"

  },
  {
    img: "/image/offerings/other.png",
    title: "Our Professional Courses",
    desc: "Learn from top industry professionals with courses designed to enhance your skills and boost your career in today’s competitive job market.",
    buttonLabel: "Explore",
    link: "/teacher-training-courses"

  },
];

export function OtherCourses() {
  return (
    <section className="pb-20 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Our Courses
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Looking to elevate your skills? Browse through 1,000+
          courses and find the one that fits your needs.
        </Typography>
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
