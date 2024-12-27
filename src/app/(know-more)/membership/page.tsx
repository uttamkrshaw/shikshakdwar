import { Footer, Navbar } from '@/components'
import React from 'react'
import Hero from './hero'
import Plan from './plan'

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Plan />
      <Footer />
    </>
  )
}

export default page