"use client"; // Ensure this is added at the very top of the file

import Hero from "@/app/(activities)/activities/hero";
import { Footer, Navbar } from "@/components";
import SelfCare from "@/components/activity/left";
import AllCarbonCard from "@/components/carbon/allCarbonCard";
import WhyChoose from "@/components/carbon/whyChoose";
import { useRouter } from "next/navigation"; 

import React from "react";

const style = {
  backgroundColor: "#E2F3BD",
};

const data = [
  {
    id: 1,
    title: "Accredited",
    subtitle:
      "We take pride in being an AA1000AS accredited organisation, a testament to our commitment to upholding the highest standards of sustainability services. Our certifications are globally recognized and accepted by regulatory bodies worldwide.",
  },
  {
    id: 2,
    title: "International Standards",
    subtitle:
      "Our adherence to internationally recognized standards such as the GHG Protocol, ISO14064, ISAE3000, and PAS2060 demonstrate our dedication to best practices in carbon accounting, assurance, and offsetting.",
  },
  {
    id: 3,
    title: "Experienced Team",
    subtitle:
      "Our team comprises seasoned professionals with over 75 years of cumulative experience. Each member is a certified expert in climate change and sustainability, ensuring that our clients receive top-notch service and guidance.",
  },
  {
    id: 4,
    title: "Extensive Client Portfolio",
    subtitle:
      "Having served over 100 clients across various sectors, ranging from Fortune 500 companies to SMEs and international organizations, we have a proven track record of delivering results and driving positive change.",
  },
  {
    id: 5,
    title: "Gold Rating by EcoVadis",
    subtitle:
      "The only Indian company to be EcoVadis approved partner and have been rated Gold for our Sustainability Services. This prestigious accolade underscores our commitment to sustainability excellence and sets us apart as a trusted partner in driving sustainable business practices.",
  },
];

const CarbonFootprint: React.FC = () => {
  const router = useRouter(); // Correct hook for client-side navigation

  const handleRedirect = () => {
    router.push("/contact-us");
  };

  return (
    <div>
      <Navbar />
      <Hero
        heading="Tracking Carbon Footprint"
        subheading="Building a Sustainable Future for Institutions, Corporates, and Hospitals"
        backgroundImage="/image/carbonFootprint/CarbonFootprint.png"
      />
        <h3 className="text-3xl font-medium mt-10 text-center text-green-800 ">Carbon Footprint</h3>

      <AllCarbonCard />
      <SelfCare
        heading="Lets Understand: Sustainability"
        subheading="Sustainability is the practice of meeting present needs without compromising the needs of future generations. Unsustainable business practices have widespread environmental, social, and economic impacts, necessitating a shift towards sustainability for the well-being of the planet and future generations. ENEN Green started in 2014 with a goal to make these businesses aware of the impact of unsustainable business practices and help them by adopting green and sustainable business practices to ensure a harmonious balance between environmental health, social well-being, and economic prosperity, leading to a better future for all."
        image="/image/carbonFootprint/carbon.jpg"
        style={style}
      />
      <WhyChoose />
      <h2 className="text-2xl text-blue-700 text-center my-5 ">
        India's Only Gold-rated and Accredited Sustainability Service Provider
      </h2>
      {data?.map((el, index) => (
        <div key={index} className="py-3 lg:px-32 px-3">
          <h2 className="lg:text-4xl text-2xl text-blue-900 ">{el.title}</h2>
          <p className="text-gray-600">{el.subtitle}</p>
        </div>
      ))}
      <div className="lg:w-7/12 w-full m-auto mt-10 px-3">
        <img
          src="/image/carbonFootprint/carbonService.jpg"
          alt="carbon"
          className="object-contain"
        />
      </div>
      <div className="w-1/2 m-auto mt-20 flex flex-col items-center justify-between bg-gradient-to-r from-green-500 to-green-800 text-white p-6 rounded-xl shadow-lg">
        <p className="text-lg font-semibold">
          For services like <span className="underline">Carbon/ESG/Certification</span>, get in touch with us!
        </p>
        <button
          onClick={handleRedirect}
          className="mt-4 md:mt-2 bg-white text-green-800 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-green-50 hover:shadow-lg transition duration-300"
        >
          Contact Us
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CarbonFootprint;
