import { Footer, Navbar } from '@/components'
import React from 'react'
import Hero from '../all-courses/hero'
import OtherCourses from '../all-courses/other-courses'

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