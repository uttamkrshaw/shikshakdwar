import { Footer, Navbar } from '@/components'

import Hero from './hero'
import AllActivites from './allActivites'

const page = () => {

  return (
    <>
    <Navbar/>
    <Hero
      heading="Transform Your Day with Our Signature Activities"
      subheading="Whether it's enhancing knowledge, connecting at destination workshops, or empowering parents and children, our activities are designed to inspire and enrich lives."
      backgroundImage="/image/activities/activity.jpg"
    />
      <AllActivites/>
      <Footer/>  
    </>
  )
}

export default page