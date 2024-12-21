import { Footer, Navbar } from "@/components";
import React from "react";
import Hero from "../activities/hero";

import DestinationCard from "@/components/activity/destinationCard";

const Children = () => {
  return (
    <div>
      <Navbar />
      <Hero
        heading="Exciting Adventures in Our Children’s Workshop"
        subheading=""
        backgroundImage="/image/activities/ChildrenWorkshop.jpg"
      />
      <DestinationCard
        heading="Children Workshop"
        subheading="Children today face a multitude of unique and unprecedented challenges. The COVID-19 pandemic has disrupted their educational routines, leading to remote learning challenges, isolation, and a lack of social interaction, which is crucial for their development. Economic in equalities can limit access to quality education and necessary resources, further exacerbating disparities. "
        subheading1="Environmental concerns, such as climate change and its consequences, also contribute to children's worries about their future.
Antah-Vriddhi  our associate partner and a specialist in establishing a sound and  most important task of social development in adolescence 'the search for identity'"
        image="/image/activities/children.jpg"
        subheading2="Addressing these struggles requires a concerted effort from parents, educators, policymakers, and society at large to create a more supportive and nurturing environment for the younger generation.
Shikshakdwar offers workshops with a 360-degree benefit for a transformative approach in enriching your child's holistic development.
We involve parents as they are our valuable partners/facilitators in their child's educational voyage, promoting a well-rounded and empowered individual."
      />
      <Footer />
    </div>
  );
};

export default Children;
