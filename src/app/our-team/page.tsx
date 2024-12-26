import { Footer, Navbar } from '@/components'
import React from 'react'
import Team from './team'
import Hero from './hero'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero />    
    <Team />
    <Footer />
    </>
  )
}

export default page