"use client";

import { Typography } from "@material-tailwind/react";
import CourseCardAcademic from "@/components/course-card-academic";

const OTHER_COURSES = [
  {
    img: "/image/courses/1.jpg",
    title: "Award-Project Management Methodolgy",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/2.jpg",
    title: "Introduction to E-Business",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/3.jpg",
    title: "Project Management Tools",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/4.jpg",
    title: "Marketing Control",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/5.jpg",
    title: "Identifying and Analysing Competitors",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/6.jpg",
    title: "Marketing Environment",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/7.jpg",
    title: "Societal Marketing Group",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/8.jpg",
    title: "Societal Marketing Concepts and its Importance",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/9.jpg",
    title: "Company Orientation Towards Market Place",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/10.jpg",
    title: "21st-Century Marketing Strategies",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/11.jpg",
    title: "Marketing Concepts and Tools",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/12.jpg",
    title: "Introduction and Nature of Marketing Management",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/13.jpg",
    title: "Introduction to Digital or Online Marketing",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/14.jpg",
    title: "Product Life Cycle Marketing",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/15.jpg",
    title: "Competitive Strategies for Market Leaders",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/16.jpg",
    title: "Brand Equity",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/17.jpg",
    title: "Marketing Strategy – Brand Positioning",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/18.jpg",
    title: "Marketing Strategy – Targeting and Positioning",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/19.jpg",
    title: "Market Segmentation",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/20.jpg",
    title: "Marketing Mix",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/21.jpg",
    title: "Integrated Marketing Communication",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/22.jpg",
    title: "Retailers and Wholesalers",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/23.jpg",
    title: "Channel Design Decisions in Marketing",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/24.jpg",
    title: "The Role of Marketing Channels",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },  {
    img: "/image/courses/24.jpg",
    title: "Customer Relationship Management – Marketing",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/25.jpg",
    title: "Customer Buying Decision Process",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/26.jpg",
    title: "Factors influencing Customer Behavior",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/27.jpg",
    title: "Market research System",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/28.jpg",
    title: "Market Demand and Forecasting",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/29.jpg",
    title: "Marketing Information System",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/30.jpg",
    title: "Fundamentals of Accounting",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/31.jpg",
    title: "Finance for Non-Finance Professionals",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/32.jpg",
    title: "Recruitment, Training, and Development",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/33.jpg",
    title: "Product Development",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/34.jpg",
    title: "Product Design Thinking",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/35.jpg",
    title: "Leadership Skill in Business",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/36.jpg",
    title: "Mass Media Broadcast: Print and Online",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/37.jpg",
    title: "Employee Relations",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/38.jpg",
    title: "Employee Compensation and Benefits",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/39.jpg",
    title: "Customer Service Excellence",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/40.jpg",
    title: "Customer Relationship Management",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/41.jpg",
    title: "Business Networking Sales and Marketing",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/42.jpg",
    title: "Business Intelligence and Knowledge",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
  },
  {
    img: "/image/courses/43.jpg",
    title: "Business Communication Skills",
    buttonLabel: "Explore",
    link: "/teacher-training-courses",
    price:3999.00
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
          <CourseCardAcademic key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherCourses;
