import Hero from '@/app/(activities)/activities/hero'
import { Footer, Navbar } from '@/components'
import InstitutionCard from "../../../components/carbon/institutionCard"

const Institutions = () => {
  return (
     <>
       <Navbar/>
       <Hero
        heading="Institutions"
        subheading="Institutions are fundamental building blocks of society, shaping the way individuals interact, work, and live together."
        backgroundImage="/image/carbonFootprint/institutions1.jpg"
      />
      <InstitutionCard/>
       <Footer/>
       </>
  )
}

export default Institutions