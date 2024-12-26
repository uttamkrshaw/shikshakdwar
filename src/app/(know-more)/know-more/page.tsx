import { Footer, Navbar } from "@/components";
import React from "react";
import OtherCourses from "./other-courses";
import Hero from "@/app/(activities)/activities/hero";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero
        heading=" Know More About Us"
        subheading="Stay informed with the latest updates, events, and achievements that shape our journey while exploring our organization's vision and commitment to a brighter, healthier future."
        backgroundImage="/image/news/t_prod_B27.jpg"
      />
      <OtherCourses />
      <Footer />
    </>
  );
};

export default page;
