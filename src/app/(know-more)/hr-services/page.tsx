import { Footer, Navbar } from "@/components";

import Hero from "@/app/(activities)/activities/hero";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero
        heading="HR Services"
        subheading="Transforming Workforces, One Solution at a Time. Redefining HR for Modern Workplaces"
        backgroundImage="/image/resources/hr_banner.jpg"
      />
      <div className="lg:px-32 px-4 py-5">
     <h3 className="xl:text-5xl md:text-4xl text-3xl text-customBlue font-medium "><span className="text-yellow-800">HR </span>Services</h3>
     <h3 className="xl:text-5xl md:text-4xl text-3xl text-customBlue font-medium py-2"><span className="text-yellow-800">Empower Your</span> Educational Journey</h3>
    <p className="font-semibold text-gray-700">Elevate Your Education Career with Shikshakdwar</p>
    <p className="font-semibold text-gray-700">At <strong>Shikshakdwar</strong> , we recognize the unique career paths of educators. Our comprehensive suite of HR services is designed to help you achieve your full potential. From securing internships to exploring entrepreneurial opportunities, our dedicated team is here to support every step of your professional journey.</p>
    <h4 className="text-3xl font-semibold pt-5 pb-3 text-gray-800">Ignite Your Passion for Learning</h4>
    <p className="text-gray-700">Join our vibrant community of educators, all committed to shaping the future. We believe continuous learning is essential for professional growth. Up-skill and re-skill with innovative training programs that enhance teaching methodologies and classroom management. Together, we can create a brighter future for our students.

Note: Services are available exclusively to registered educators who opt for training courses.</p>
    <h4 className="text-3xl font-semibold pt-5 pb-3 text-gray-800">Empower Your Future, Transform Your Learning</h4>
    <p className="text-gray-700">The world is changing rapidly, and to succeed, continuous growth is essential. Shikshakdwar is committed to supporting your journey with resources, guidance, and a strong community to unlock your full potential.

We're always on the lookout for passionate individuals who care about children's education and want to make learning fun and exciting. Let's work together to build an amazing future!</p>
    <h4 className="text-3xl font-semibold pt-5 pb-3 text-gray-800">Join Us</h4>
    <p className="text-gray-700">Be part of a community that is creating a brighter future through education and innovation.

</p>
  
      </div>
      <Footer />
    </>
  );
};

export default page;
