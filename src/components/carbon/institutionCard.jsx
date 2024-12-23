import React from 'react';

const InstitutionCard = () => {
    const data=[
        {
          title: 'Transparency and Credibility:',
          description:
            'Quantify your greenhouse gas (GHG) emissions across operations, demonstrating transparency and commitment to stakeholders.',
        },
        {
          title: 'Data-Driven Decision Making:',
          description:
            'Identify emission hotspots and prioritize reduction strategies, optimizing resource allocation for maximum impact.',
        },
        {
          title: 'Enhanced Sustainability Reporting:',
          description:
            'Align with global reporting frameworks like GRI and CDP, showcasing your sustainability leadership.',
        },
        {
          title: 'Competitive Advantage:',
          description:
            'Attract environmentally conscious partners, students, and investors, solidifying your brand as a sustainability champion.',
        },
        {
          title: 'Reduce Environmental Impact:',
          description:
            'Contribute to a healthier planet by minimizing your institution`s carbon footprint and mitigating climate change.',
        },
        {
          title: 'Our Comprehensive Process:',
          description:
            'Scope Definition: Collaboratively define the boundaries of your carbon footprint assessment, ensuring accuracy and relevance.',
        },
        {
          title: 'Data Gathering:',
          description:
            'Collect and analyze data from relevant sources, including energy consumption, waste generation, travel, and supply chain activities.',
        },
      ]
  return (
    <div className="px-4 py-8 lg:px-16 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-center bg-gray-100 rounded-lg shadow-lg overflow-hidden">
        {/* Left Content */}
        <div className="lg:w-7/12 px-6 py-8 lg:py-12">
          <h3 className="text-3xl lg:text-4xl font-semibold text-blue-900">
            Institutions
          </h3>
          <h4 className="text-xl lg:text-2xl font-medium text-gray-800 mt-2">
            INSTITUTION CARBON FOOTPRINTS:
          </h4>
          <p className="text-gray-700 text-base lg:text-lg mt-4">
            Empowered Institutions, Sustainable Future
          </p>
          <p className="text-gray-600 text-sm lg:text-base mt-2">
            Unleash the power of carbon footprinting. Does your institution
            strive to minimize its environmental impact?
          </p>
          <p className="text-gray-600 text-sm lg:text-base mt-2">
            Are you searching for actionable insights to guide your
            sustainability journey? Look no further! Our comprehensive carbon
            footprinting services unlock data-driven solutions, empowering
            institutions like yours to make a real difference.
          </p>
          <p className="text-lg font-semibold text-blue-900 mt-4">
            Why Carbon Footprinting for Institutions?
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-5/12 px-5">
          <img
            src="/image/carbonFootprint/institution_banner.jpg"
            alt="Institution Banner"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Features List */}
      <div className="mt-8 bg-gray-100 rounded-lg shadow-lg p-6 lg:p-8">
  <ul className="space-y-6">
    {data.map((item, index) => (
      <li
        key={index}
        className="group flex flex-col sm:flex-row sm:items-start sm:space-x-4 hover:bg-blue-50 rounded-lg py-2 transition"
      >
        <span className="text-blue-900 font-semibold text-lg sm:w-1/3">
          {item.title}
        </span>
        <p className="text-gray-600 text-sm lg:text-base sm:w-2/3">
          {item.description}
        </p>
      </li>
    ))}
  </ul>
</div>

    </div>
  );
};

export default InstitutionCard;
