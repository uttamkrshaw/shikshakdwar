import { Footer, Navbar } from '@/components'
import React from 'react'
import Hero from './hero'
import Vision from './vision'
import Threads from './threads'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Vision />
    <Threads />
    <Footer />
    </>
  )
}

export default page