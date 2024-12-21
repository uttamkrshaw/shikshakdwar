import React from 'react';

const StressCard = () => {
  return (
    <div className="flex items-center lg:flex-row flex-col gap-8 lg:px-32 sm:px-4 overflow-hidden p-6 mt-10">
      <div className="flex-1">
        <img 
          src="/image/activities/stressbanner.jpg" 
          alt="sideimg" 
          className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <div className="flex-1 space-y-6">
        <h3 className="text-3xl text-blue-900 font-semibold mb-3 hover:text-blue-700 transition-colors">
          A Workshop for Teachers
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          Modern day teaching leaves teachers grappling with stress. Managing their stress is not just crucial for them but also for the students' overall performance.
        </p>

        <h3 className="text-3xl text-blue-900 font-semibold mb-3 hover:text-blue-700 transition-colors">
          Description
        </h3>
        <p className="text-gray-700 text-lg mb-4 leading-relaxed">
          This workshop is designed to help teachers transform their stress into strength through effective tools and strategies. Participants will learn how to manage stress, build resilience, and cultivate a positive mindset to navigate personal and professional challenges with confidence.
        </p>

        <h3 className="text-3xl text-blue-900 font-semibold mb-3 hover:text-blue-700 transition-colors">
          Key Highlights
        </h3>
        <ul className="space-y-2 list-inside text-lg text-gray-700">
          <li>🔹 Manage Stress Effectively: Learn practical techniques to manage stress and prevent burnout.</li>
          <li>🔹 Build Resilience: Develop resilience skills to bounce back from setbacks and adversity.</li>
          <li>🔹 Cultivate a Positive Mindset: Cultivate a positive outlook to enhance well-being and success.</li>
        </ul>
      </div>
    </div>
  );
};

export default StressCard;
