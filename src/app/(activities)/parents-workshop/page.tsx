
import { Footer, Navbar } from '@/components'
import React from 'react'
import Hero from '../activities/hero'
import DestinationCard from '@/components/activity/destinationCard'



const Parent = () => {
  return (
    <div>
        <Navbar/>
    <Hero
      heading="Parents Workshop: Strengthening Families Together"
      subheading=""
      backgroundImage="/image/activities/ParentsWorkshop.jpg"
    />
     <DestinationCard heading="Parents Workshop" subheading="Shikshakdwar engages and empowers parents and caregivers to become full partners in their children's pursuit of lifelong learning goals for themselves and their children. Parents play a very crucial role and our workshops are designed to provide them with valuable insights, resources, and strategies to support their children who may be experiencing various challenges. We help parents learn more about what to expect in the coming years and prepare for each developmental stage."
     subheading1="Shikshakdwar offers workshops with a 360-degree benefit for a transformative approach in enriching your child's holistic development.
We involve parents/facilitators as they are our valuable partners in their child's educational voyage, promoting a well-rounded and empowered individual." subheading2="Together, we can create a safe and nurturing environment for our children to thrive." image="/image/activities/parent1.jpg"/>
        <Footer/>
    </div>
  )
}

export default Parent