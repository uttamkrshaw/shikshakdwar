import Hero from '@/app/(activities)/activities/hero'
import { Footer, Navbar } from '@/components'
import AcademicCard from '@/components/program/academicCard'

import React from 'react'

const AcademicPrograms = () => {
  return (
    <div>
        <Navbar/>
        <Hero
      heading="Academic Programs
Browse Professional Short Courses"
      subheading="Professional Development Programs"
      backgroundImage="/image/program/AcademicPrograms.jpg"
    />
    <AcademicCard/>
        <Footer/>
    </div>
  )
}

export default AcademicPrograms