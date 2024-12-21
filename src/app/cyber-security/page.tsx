import { Footer, Navbar } from '@/components'
import React from 'react'
import DataCard from './data-card'
import Hero from './hero'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <DataCard />
    <Footer />
    </>
  )
}

export default page