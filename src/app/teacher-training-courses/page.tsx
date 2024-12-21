import { Footer, Navbar } from '@/components'
import React from 'react'
import Hero from './hero'
import TeacherCourse from './teacher-course'
import MoreDetails from './more-details'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <TeacherCourse />
    <MoreDetails />
    <Footer />
    </>
  )
}

export default page