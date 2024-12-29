"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/teacher/banner.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="md:max-w-full lg:max-w-3xl"
            placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
          >
            Teacher Training Courses Online
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
            placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
          >
            Unlock your potential with dynamic online teacher training courses! Gain flexible, expert-led education at your own pace. Enhance teaching skills, stay updated on innovative techniques, and boost your career prospects. Empower your students and transform classrooms with engaging, impactful methods. Start your journey to success today!          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
