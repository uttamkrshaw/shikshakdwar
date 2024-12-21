
import Hero from "@/app/(activities)/activities/hero";
import { Footer, Navbar } from "@/components";
import SelfCare from "@/components/activity/left";
import RightKnowledge from "@/components/activity/right";
import StressCard from "@/components/activity/stressCard";

import React from "react";

const Stress = () => {
  return (
    <>
      <Navbar />
      <Hero
      heading="Transform Stress Into Strength"
      subheading=""
      backgroundImage="/image/activities/stress_bg.jpg"
    />
     
    <StressCard/>
      <Footer />
    </>
  );
};

export default Stress;
