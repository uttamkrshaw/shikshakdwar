"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/guide/banner.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="md:max-w-full lg:max-w-3xl"
            placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
          >
            Become a Teacher
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
            placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
          >
            Teaching ignites curiosity and shapes the future, one student at a time. It's about more than facts—it's nurturing a child’s natural thirst for knowledge, creating "aha!" moments, and witnessing the joy of discovery. As a teacher, you inspire critical thinking, guide students through challenges, and help them reach their potential. The ripple effect of your impact fosters compassionate, thoughtful individuals, contributing to a brighter world. Though it requires dedication and empathy, the rewards are immeasurable. Teaching isn’t just a job—it’s a calling to make a lasting difference, one student’s story at a time.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
