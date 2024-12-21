"use client"

const AcademicCard = () => {
  return (
    <div className="px-6 sm:px-10 lg:px-48 pt-10">
      <div className="bg-gray-100 p-8 sm:p-10 lg:p-12 rounded-lg shadow-md">
        <h3 className="text-[#002060] text-3xl sm:text-4xl font-bold pb-6 lg:text-center text-left">
          <span className="text-yellow-700">Your Gateway </span>
          to Professional Growth
        </h3>
        <ul className="space-y-2 leading-relaxed list-disc list-inside lg:text-xl text-base">
          <li>
            Embrace the excitement of lifelong learning; continuous
            self-improvement is paramount.
          </li>
          <li>
            Cultivate curiosity and a hunger for knowledge; essential traits in
            navigating your career.
          </li>
          <li>
            Break free from stagnation; our platform supports your professional
            transformation.
          </li>
          <li>
            Empower yourself to thrive in today's fast-paced business world with
            our resources.
          </li>
          <li>
            Stay connected with the Acacia community; shape a brighter future
            with us.
          </li>
          <li>
            Explore rigorous online programs designed for professionals,
            students, and lifelong learners.
          </li>
          <li>
            Our global Professional Development Programs offer certificates in
            IT and management.
          </li>
        </ul>
      </div>
      <div className="my-20 ">
        <h3 className="text-[#002060] text-3xl sm:text-4xl font-bold pb-6 lg:text-center text-left">
          <span className="text-yellow-700 pb-2">
            Revolutionizing Learning: <br />{" "}
          </span>{" "}
          Unlocking Future-Ready Skills
        </h3>
        <div className="border border-[#002060] p-10 rounded-xl shadow-md">
            <h3 className="text-yellow-700 pb-3  text-3xl font-medium text-center">Futuristic Professional Courses</h3>
          <ul className="space-y-2 leading-relaxed list-disc list-inside lg:text-xl text-base">
          <li>
            <span className="text-[#002060] font-semibold">Access Made Easy: </span>
            Inclusive pathways based on your current abilities.
          </li>
          <li>
            <span className="text-[#002060] font-semibold">Flexibility Redefined: </span>
            Courses designed around your commitments.

          </li>
          <li>
            <span className="text-[#002060] font-semibold">Impactful Insights: </span>
            Enrich your career and personal pursuits through connections and knowledge.
          </li>
          <li>
            <span className="text-[#002060] font-semibold">Uncompromising Quality: </span>Courses led by industry experts ensure transformative learning. 
          </li>
          
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-[#002060] text-3xl sm:text-4xl font-bold pb-3 lg:text-center text-left"><span className="text-yellow-700">Accessible Education </span>  for Everyone</h3>
        <p className="text-[#002060] text-3xl font-medium text-center"> Empowered Minds for a Better Tomorrow...</p>
        <button className="mt-5 px-6 py-3 bg-gradient-to-r from-[#002060] to-blue-500 text-white font-bold text-xl rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out">
  Explore Courses
</button>

      </div>
    </div>
  );
};

export default AcademicCard;
