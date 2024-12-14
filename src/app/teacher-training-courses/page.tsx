import { Footer, Navbar } from '@/components'
import React from 'react'
import Hero from './hero'
import TeacherCourse from './teacher-course'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero/>
    <TeacherCourse />
    <Footer />
    </>
  )
}

export default page