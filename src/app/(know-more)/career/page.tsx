import { Footer, Navbar } from '@/components'
import React from 'react'
import Hero from './hero'
import Detail from './detail'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero />  
    <Detail />
    <Footer />
    </>
  )
}

export default page