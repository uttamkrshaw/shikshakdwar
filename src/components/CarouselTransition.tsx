"use client";
import { Carousel } from "@material-tailwind/react";

export function CarouselTransition() {
  return (
    <Carousel
      transition={{ duration: 2 }}
      autoplay={true}
      loop={true}
      className="rounded-xl"
      placeholder=""
      onPointerEnterCapture={() => { }}
      onPointerLeaveCapture={() => { }}>
      <img
        src="/image/home/gallaryimg1.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/image/home/gallaryimg2.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/image/home/gallaryimg3.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/image/home/gallaryimg4.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/image/home/gallaryimg5.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/image/home/gallaryimg6.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/image/home/gallaryimg7.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/image/home/gallaryimg8.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />

    </Carousel>
  );
}