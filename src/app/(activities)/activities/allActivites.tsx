"use client";

import { Typography } from "@material-tailwind/react";

const MAIN_ACTIVITIES = [
  {
    img: "/image/activities/KnowledgeEnhancement.jpg",
    title: "Knowledge Enhancement",
    desc: "Gain valuable insights and skills through engaging sessions tailored to broaden your knowledge in various fields.",
    buttonLabel: "Learn More",
    link: "/knowledge-enhancement",
  },
  {
    img: "/image/activities/DestinationWorkshop.jpg",
    title: "Destination Workshop",
    desc: "Learn and explore with immersive workshops set in scenic locations, blending education and adventure perfectly.",
    buttonLabel: "Learn More",
    link: "/destination-workshop",
  },
  {
    img: "/image/activities/ParentsWorkshop.jpg",
    title: "Parents Workshop",
    desc: "Equip parents with tools and strategies to support their children's growth in both learning and life skills.",
    buttonLabel: "Learn More",
    link: "/parents-workshop",
  },
  {
    img: "/image/activities/ChildrenWorkshop.jpg",
    title: "Children Workshop",
    desc: "Engage young learners with creative and interactive sessions designed to inspire and nurture their potential.",
    buttonLabel: "Learn More",
    link: "/children-workshop",
  },
  {
    img: "/image/activities/StresstoStrength.jpg",
    title: "Stress to Strength",
    desc: "Transform stress into strength with expert-guided sessions that focus on resilience and mental well-being.",
    buttonLabel: "Learn More",
    link: "/stress-to-strength",
  },
];

export function AllActivities() {
  return (
    <section className="pb-20 px-8">
      {/* Header Section */}
      <div className="container mx-auto mb-12 text-center">
        <Typography variant="h2" color="blue-gray" className="mt-5">
          Discover Our Activities
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto mt-2 w-full px-4 font-normal text-gray-500 md:w-8/12"
        >
          Explore exciting and engaging activities designed to enrich your experience. From thrilling adventures to relaxing moments, there's something for everyone to enjoy.
        </Typography>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {MAIN_ACTIVITIES.map((props, idx) => (
            <div
              key={idx}
              className="transform overflow-hidden rounded-lg border bg-white p-5 shadow-md transition duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                src={props.img}
                alt={props.title}
                className="mb-4 h-48 w-full rounded-lg object-cover"
              />
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {props.title}
              </Typography>
              {/* Fixed Description */}
              <Typography className="mb-4 text-gray-500">
                {props.desc}
              </Typography>
              <a
  href={props.link}
  className="inline-block rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
>
  {props.buttonLabel}
  <span className="ml-2 text-lg">→</span> 
</a>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AllActivities;
