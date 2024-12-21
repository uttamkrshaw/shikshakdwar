"use client";

import { Button, Typography, Card } from "@material-tailwind/react";

interface HeroProps {
  heading: string;
  subheading: string;
  backgroundImage: string;
}

function Hero({ heading, subheading, backgroundImage }: HeroProps) {
  return (
    <div
      className="relative min-h-screen w-full bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen lg:px-8 px-4">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
          <h1
            color="white"
            className="font-bold md:max-w-full lg:max-w-3xl xl:text-5xl md:text-4xl text-3xl text-white " style={{ lineHeight: "1.2" }}
          >
            {heading}
          </h1>

          <Typography
            variant="lead"
            color="white"
            className="mt-6 mb-10 text-3xl w-full md:max-w-full lg:max-w-4xl"
          >
            {subheading}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
