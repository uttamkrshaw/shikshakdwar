"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/courses/t_prod_B490.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="md:max-w-full lg:max-w-3xl"
          >
            Explore Our Diverse Range of Courses
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
          >
            Transform Your Future with Our Comprehensive Courses - Whether You're Interested in Web Development, Data Science, Digital Marketing, Graphic Design, Cybersecurity, or Business Management, Our Expert-Led Programs Offer the Skills and Knowledge You Need to Thrive in the Modern Job Market. Start Your Learning Journey with Us Today!
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
