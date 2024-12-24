import Hero from '@/app/(activities)/activities/hero'
import { Footer, Navbar } from '@/components'
import React from 'react'

const Hospitals = () => {
  const data=[
    {
      id:1,
      heading:"Transparency and Accountability:",
      list:["Quantify your hospitals total carbon footprint across energy use, waste generation, transportation, and supply chains, fostering transparency and accountability towards patients, staff, and stakeholders.","Demonstrate your commitment to environmental sustainability, aligning with global initiatives like the Paris Agreement and showcasing your leadership in the healthcare sector."],
    },
    {
      id:2,
      heading:"Data-Driven Decision Making:",
      list:["Identify emission hotspots within your hospital operations, pinpointing areas for targeted reduction efforts.Prioritize resource allocation and investment towards initiatives with the highest environmental impact, maximizing your sustainability efforts.","Inform effective procurement strategies by choosing suppliers with lower carbon footprints, minimizing embodied emissions within your supply chain."],
    },
    {
      id:3,
      heading:"Enhanced Sustainability Reporting:",
      list:["Generate comprehensive reports compliant with international frameworks like GRI and CDP, ensuring accurate and credible communication of your sustainability performance.","Showcase your progress towards sustainability goals and attract environmentally conscious patients, staff, and partners, strengthening your competitive edge."],
    },
    {
      id:4,
      heading:"Cost Savings and Operational Efficiency:",
      list:["Identifying and addressing inefficiencies in resource utilization can lead to significant cost savings, ultimately improving your hospital`s financial sustainability","Implementing energy-saving measures, reducing waste generation, and optimizing transportation can unlock immediate and long-term financial benefits."],
    },
    {
      id:5,
      heading:"Building Community Trust and Engagement:",
      list:["Demonstrate your commitment to environmental stewardship, fostering trust and positive engagement with patients, staff, and the local community.","Contribute to a healthier planet for future generations, aligning your values with the growing public concern about climate change."],
    },
  ]
  return (
   <>
     <Navbar/>
     <Hero
        heading="Hospitals"
        subheading=""
        backgroundImage="/image/carbonFootprint/hospitalimg.jpg"
      />
   <div className="px-4 md:px-32 mt-10 space-y-6">
  {/* Title and Description */}
  <h3 className="text-4xl text-indigo-800 font-bold py-3">Hospitals</h3>
  <p className="text-lg text-gray-700 leading-relaxed">
    Hospitals play a vital role in ensuring community health and well-being. However, their operations often come with a significant environmental footprint, contributing to greenhouse gas emissions and resource depletion. This is where carbon footprinting services become crucial for hospitals, offering essential benefits in several key areas:
  </p>

  {/* Card List */}
  {data.map((el, index) => (
    <div
      key={index}
      className="bg-gray-100 shadow-md rounded-lg p-6 transition duration-300 hover:shadow-lg"
    >
      {/* Heading */}
      <h4 className="text-2xl font-semibold text-indigo-700 mb-4">
        {el.heading}
      </h4>
      {/* List */}
      <ul className="space-y-3 text-gray-600">
        {el.list.map((item, itemIndex) => (
          <li
            key={itemIndex}
            className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition duration-200"
          >
            {/* Icon */}
            <div className="py-2 px-4 flex items-center justify-center bg-indigo-800 text-white rounded-full text-sm font-bold">
              {itemIndex + 1}
            </div>
            {/* Text */}
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

     <Footer/>
     </>
  )
}

export default Hospitals