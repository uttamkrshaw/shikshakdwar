
import Hero from "@/app/activities/hero";
import { Footer, Navbar } from "@/components";
import SelfCare from "@/components/activity/selfCare";

import React from "react";

const Knowledge = () => {
  return (
    <>
      <Navbar />
      <Hero
      heading="Knowledge Enhancement: The Essential Process"
      subheading=""
      backgroundImage="/image/activities/Knowledge_bg.jpg"
    />
    <SelfCare/>
      <Footer />
    </>
  );
};

export default Knowledge;
