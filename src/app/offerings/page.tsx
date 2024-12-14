import { Footer, Navbar } from '@/components'
import React from 'react'
import Hero from './hero'
import OtherCourses from './other-courses'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <OtherCourses />
    <Footer />
    </>
  )
}

export default page