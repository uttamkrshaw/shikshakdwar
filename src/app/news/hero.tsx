"use client";

import { Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/news/t_prod_B27.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <Typography
            variant="h1"
            color="white"
            className="md:max-w-full lg:max-w-3xl"
            placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
          >
           News & Events
          </Typography>
          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-3xl"
            placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
          >
            Stay informed with the latest updates, events, and achievements that shape our journey while exploring our organization's vision and commitment to a brighter, healthier future.          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
