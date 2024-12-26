import React from 'react'
import { Footer, Navbar } from '@/components'
import Hero from './hero'
import Environment from './environment'

const page = () => {
  return (
    <>
    <Navbar />
    <Hero   />
    <Environment />  
    <Footer />
    </>
  )
}

export default page