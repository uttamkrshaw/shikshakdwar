import React from 'react';

const WhyChoose = () => {
  return (
    <div className="flex items-center lg:flex-row flex-col gap-8 lg:px-32 sm:px-4 overflow-hidden p-6 mt-5">
      <div className="flex-1">
        <img 
          src="/image/carbonFootprint/whychoose.jpg" 
          alt="sideimg" 
          className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl text-blue-900 font-semibold mb-3 hover:text-blue-700 transition-colors">
        Why Choose Us?
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
        At ENEN Green, we stand as a beacon of sustainability, offering comprehensive solutions to address the pressing challenges of climate change. Heres why you should choose us:
        </p>

        <h3 className="text-3xl text-blue-900 font-semibold mb-3 hover:text-blue-700 transition-colors">
        Decade+ Experience:
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
        With over a decade of dedicated experience in climate change and sustainability, ENEN Green brings a wealth of knowledge and expertise to the table. Our longevity in the field demonstrates our commitment and reliability in delivering sustainable solutions.
        </p>

       
      </div>
    </div>
  );
};

export default WhyChoose;
