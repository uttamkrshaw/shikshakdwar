
import { Footer, Navbar } from '@/components'
import React from 'react'
import Hero from '../activities/hero'

import DestinationCard from '@/components/activity/destinationCard'

const Destination = () => {
  return (
    <div>
      <Navbar />
      <Hero
        heading="Destination Workshop: Your Path to Knowledge"
        subheading=""
        backgroundImage="/image/activities/DestinationWorkshop_bg.jpg"
      />
      <DestinationCard heading="Destination Workshop" subheading="Destination workshops will provide a unique and enriching experience that goes beyond the traditional confines of a classroom. These workshops are designed to provide educators with the opportunity to gain fresh perspectives, and enhance their personal & professional development in an inspiring and immersive setting."
        subheading1="We are here to give them a break free experience from their daily routines and discover innovative approaches for self-mental health and human management. The facilitators will get an opportunity for dynamic exchange of ideas, collaboration, and networking among teachers from diverse backgrounds, all of which ultimately benefits students in the long run. " image="/image/activities/destination.jpg" subheading2="Shikshakdwar offers workshops with a 360-degree benefit for a transformative approach in enriching the development." />
      <Footer />
    </div>
  )
}

export default Destination