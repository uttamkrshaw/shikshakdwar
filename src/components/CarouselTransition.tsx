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
        src="/image/home/1.webp"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/image/home/2.webp"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/image/home/3.webp"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/image/home/4.webp"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/image/home/5.webp"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      {/* <img
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
      /> */}

    </Carousel>
  );
}