"use client";
import Hero from '@/app/(activities)/activities/hero'
import { Footer, Navbar } from '@/components'
import React from 'react'

const Corporate = () => {
  return (
    <>
    <Navbar/>
    <Hero
        heading="Your Gateway to Corporate Growth and Innovation"
        subheading=""
        backgroundImage="/image/carbonFootprint/corporate_side.jpg"
      />
    <div className="mt-10 px-10 md:px-32">
  <h3 className="text-4xl text-indigo-800 py-3 font-bold">Corporate</h3>
  <p className="text-lg text-gray-700 leading-relaxed mb-6">
    ENEN's goal is to embed sustainable climate action into corporate activity. Effectiveness, transparency, and credibility are the keys to work with you to design solutions that are suitable for our clientele. It’s up to you whether you adopt the entire range of measures – from long-term climate action strategy to offsetting of your total emissions – or simply select individual building blocks, such as carbon footprint assessment or consultancy around carbon emission reduction.
  </p>
  <div className="flex flex-col md:flex-row gap-10 items-start">
   
    {/* List Section */}
    <div className="md:w-1/2">
      <ul className="space-y-6">
        {[
          "ENEN can offset your carbon emissions by developing carbon reduction/removal projects on your behalf with promising SDG impacts or can simply provide you with the highest quality carbon credits.",
          "ENEN carries out Scope 1, Scope 2, and Scope 3 carbon emission assessment and provides an internationally verified and certified report on the enterprise's carbon footprint.",
          "ENEN conducts extensive energy audits and provides detailed audit reports for further analysis. Practical energy-saving solutions help the enterprise become energy-efficient.",
          "ENEN are experts in developing climate change mitigation and adaptation projects around the globe.",
          "ENEN neutralizes carbon emissions of businesses by providing world-class solutions tailored for their needs and commitments.",
          "ENEN provides ESG risk evaluation, data verification, and report assurance along with advisory services, disclosure gap analyses, and action plans to achieve desired outputs.",
          "ENEN finances climate change mitigation and adaptation projects worldwide and facilitates funds for forestry and other nature-based climate change mitigation activities.",
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <p className="text-gray-700">{item}</p>
          </li>
        ))}
      </ul>
    </div>
     {/* Image Section */}
     <div className="md:w-1/2">
      
      <img
      src="/image/carbonFootprint/corporatebanner.jpg"
      alt="Corporate"
      className="rounded-lg shadow-lg"
    />
  </div>
  </div>
</div>

    <Footer/>
    </>
  )
}

export default Corporate