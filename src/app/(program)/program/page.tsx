import Hero from '@/app/(activities)/activities/hero'
import { Footer, Navbar } from '@/components'
import AllPrograms from '@/components/program/allPrograms'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero
        heading="Unlock Your Potential with Our Innovative Programs"
        subheading="Designed to Build Expertise and Transform Your Future.
        Discover tailored learning experiences that prepare you for real-world challenges."
        backgroundImage="/image/program/programs.jpg"
      />
      <AllPrograms />
      <Footer />
    </>
  )
}

export default page