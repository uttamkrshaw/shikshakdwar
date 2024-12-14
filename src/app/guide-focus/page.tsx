import { Footer, Navbar } from '@/components'
import React from 'react'
import Hero from './hero'
import { WhyBecomeTeacher } from './why-become-teacher'
import RoleTeacher from './role-teacher'
import SkillUpTeacher from './skill-up-teacher'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <WhyBecomeTeacher />
    <RoleTeacher/>
    <SkillUpTeacher/>
    <Footer />
    </>
  )
}

export default page