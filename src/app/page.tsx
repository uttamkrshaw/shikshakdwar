// components
import { Navbar, Footer } from "@/components";


// sections
import { CarouselTransition } from "@/components/CarouselTransition";
import DestinationCard from "@/components/activity/destinationCard";
import DetailCardLeft from "@/components/detailCardleft";
import DetailCardRight from "@/components/detailCardright";
import MultiCarousel from "@/components/multicarousel";
import TextReveal from "@/components/ui/text-reveal";
import Marquee from "react-fast-marquee";
import WhyUs from "./whyus";

const certificate = [
  {
    url: "/image/offer/1.jpg",
  },
  {
    url: "/image/offer/1.png",
  },
  {
    url: "/image/offer/2.jpg",
  },
  {
    url: "/image/offer/3.jpg",
  },
  {
    url: "/image/offer/4.jpg",
  },
  {
    url: "/image/offer/5.jpg",
  },
  {
    url: "/image/offer/6.jpg",
  },
  {
    url: "/image/offer/7.jpg",
  },
  {
    url: "/image/offer/8.jpg",
  },
  {
    url: "/image/offer/9.jpg",
  },
  {
    url: "/image/offer/10.jpg",
  },
  {
    url: "/image/offer/11.jpg",
  },
  {
    url: "/image/offer/12.jpg",
  },
  {
    url: "/image/offer/13.jpg",
  },
  {
    url: "/image/offer/16.jpg",
  },
  {
    url: "/image/offer/18.png",
  },
  {
    url: "/image/offer/19.png",
  },
  {
    url: "/image/offer/20.png",
  },
  {
    url: "/image/offer/22.jpg",
  },
  {
    url: "/image/offer/23.jpg",
  },
  {
    url: "/image/offer/24.jpg",
  },
];
const recognition = [
  {
    url: "/image/recognition/img_116.png",
  },
  {
    url: "/image/recognition/img_122.png",
  },
  {
    url: "/image/recognition/img_123.png",
  },
  {
    url: "/image/recognition/img_125.png",
  },

]
const partners = [
  {
    url: "/image/partner/1.jpg",
  },
  {
    url: "/image/partner/2.jpg",
  },
  {
    url: "/image/partner/3.jpg",
  },
  {
    url: "/image/partner/14.jpg",
  },
  {
    url: "/image/partner/15.jpg",
  },
  {
    url: "/image/partner/21.jpg",
  },
  {
    url: "/image/partner/17.jpg",
  }];

export default function Campaign() {
  return (
    <>
      <Navbar />
      <CarouselTransition />
      <div className="z-2 flex min-h-3 items-center justify-center rounded-lg border bg-white dark:bg-black">
        <TextReveal text="Explore e-learning programs and Get Certified from World's Leading IT Companies and Institutions Today!" />
      </div>

      <DestinationCard heading="About Shikshakdwar"
        subheading='Welcome to Shikshakdwar Learning Community, a vibrant and collaborative space where the journey of education transcends boundaries. "Shikshakdwar," meaning "Through Teachers" in Hindi, signifies our belief in the transformative power of educators as catalysts for inspiration, learning, and empowerment.'
        image="/image/home/full_img_1_9.jpg"
        subheading1="Inspiration: We believe that inspiration fuels the flame of curiosity and the desire to learn. Learning: Education is not just about acquiring information; it's a journey of continuous learning."
        subheading2="Empowerment: Our ultimate goal is to empower individuals with the knowledge, skills, and confidence needed to make a positive impact on the world." />


      <DetailCardRight
        heading="Our Vision"
        subheading="Empowering Minds, Transforming the Future"
        subheading1="In envisioning the future, we see a world where education transcends boundaries, unlocking the full potential of every learner. Guided by innovation and a dedication to excellence, we aspire to set new standards in education."
        subheading2="Our vision is to create a dynamic space that fosters creativity, curiosity, and the continuous pursuit of knowledge, paving the way for a brighter and more interconnected global community."
        image="/image/home/vision.jpg"
      />
      <DetailCardLeft
        heading="Our Mission"
        subheading="Empowering Minds, Enriching the Future"
        subheading1="Empowering learners with transformative education, our mission is to cultivate critical thinking, practical skills, reduce the learning gap and build a passion for continuous growth."
        subheading2="Driven by excellence, innovation, and a commitment to ethical education, we aspire to be a catalyst for positive change. Our goal is to inspire minds, enrich future, and contribute to a global community of lifelong learners dedicated to making a meaningful impact."
        image="/image/home/mission.jpg"
      />
      <DetailCardRight
        heading="Our Objectives"
        subheading=""
        subheading1="Objectives are specific, measurable, and time-bound goals that support the mission. To provide comprehensive educational experiences that go beyond academic knowledge, fostering critical thinking, creativity and a sense of responsibility in learners."
        subheading2="To Connect learners through accessible and inclusive platforms, breaking down geographical barriers and equip learners with practical skills. To leverage education as a tool for positive social change by addressing challenges, promoting sustainability, and instilling a sense of responsibility in learners"
        image="/image/home/objective.jpg"
      />
      <WhyUs />
      <Marquee className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-lg text-white p-4 rounded-lg shadow-lg">
        Certiport Authorized Testing Centre | International Certification Programs (Microsoft, Cisco, IBM, ITS, Autodesk, Adobe, Unity and more) | e-learning courses, practice tests | Teacher Training | TEFL | Cyber Security | Mentoring & Applied Project Development | NOCN Certification
      </Marquee>
      <MultiCarousel data={certificate} title={"Certification Offered By"} />
      <MultiCarousel data={partners} title={"Our Partners"} />
      <div className='lg:px-32 px-4 overflow-hidden m-auto pt-1'>
        <h3 className=" mb-10 lg:text-4xl md:text-3xl text-center text-2xl font-bold m-auto text-purple-900">Recognized By</h3>
      </div>
      <div className="max-w-6xl mx-auto my-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recognition.map((imageUrl: { url: string }, index: number) => {
          return (
            <div className="slider p-5" key={index}>
              <img src={imageUrl?.url} alt="movie" />
            </div>
          );
        })}

      </div>
      <Footer />
    </>
  );
}
