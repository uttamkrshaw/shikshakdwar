import { Footer, Navbar } from '@/components'
import React from 'react'
import OtherCourses from './other-courses'
import Hero from './hero'

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