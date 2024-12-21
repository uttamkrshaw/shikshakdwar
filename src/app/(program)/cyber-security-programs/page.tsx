import { Footer, Navbar } from '@/components'
import React from 'react'
import CognitiveCard from '@/components/program/cognitiveCard'
import Curriculum from '@/components/program/curriculum'
import Hero from '@/app/(activities)/activities/hero'


const curriculamStyle = {
    backgroundColor: "#e3e5e8"
}
const featureStyle = {
    backgroundColor: "#788db6",

}
const curricullamData = [
    {
        id: 1,
        name: "Self-Instructional Lessons",
        title: "To the greatest extent possible, we want the curriculum to be self-administered. Even with kindergarten students, it is possible to provide lessons that students can do independently or with very little help.",
        img: "/image/program/img1.png"
    },
    {
        id: 2,
        name: "Lesson Mastery",
        title: "Each lesson in the curriculum carries an independent mastery to ensure that the lesson has been learned. After completing a lesson, the students take a mastery test to demonstrate that they have comprehended and assimilated the lesson content.",
        img: "/image/program/img2.png"
    },
    {
        id: 3,
        name: "Continuous Progress",
        title: "This is the key to successful instruction. Each student progresses at his/her own rate through the curriculum. Some students may need only a day or two to complete and master a lesson. Other students may need the full allotted days in order to progress, and a few students may take more than the allotted time in order to complete the lesson.",
        img: "/image/program/img3.png"
    }
];

const featureamData = [
    {
        id: 1,
        name: "Physical Development",
        title: "Physical development is the way your child moves his/her arms and legs (large motor skills) and uses the small muscles in their fingers and hands (small motor skills). Playing outside and taking physical activity breaks during the day helps children build healthy bones and muscles, focus better, and feel less stress. Doing puzzles, writing, drawing, and working with clay are some activities that develop childrens finger and hand control.",
        img: "/image/program/img4.jpg"
    },
    {
        id: 2,
        name: "Language & Literacy Development",
        title: "Language and literacy development includes understanding language and communicating through reading, writing, listening, and talking. Literacy is a big focus in kindergarten. Your child will use these skills throughout his life.",
        img: "/image/program/img5.jpg"
    },
    {
        id: 3,
        name: "Thinking or Cognitive Skill",
        title: "Thinking, or cognitive, skills develop as children explore, observe, create, ask questions, do new tasks, and solve problems. Teachers help children plan what they're going to do, encourage children to discuss and think more deeply about ideas, and include children when making decisions",
        img: "/image/program/img6.jpg"
    }
];

const page = () => {
    return (
        <>
            <Navbar />
            <Hero
                heading="Mastering Cybersecurity: Safeguard the Digital Frontier"
                subheading="Learn essential cybersecurity skills to protect digital assets, including threat analysis, ethical hacking, encryption, and incident response. Gain hands-on experience to build a strong foundation for a secure tech career."
                backgroundImage="/image/cyber/cyber.webp"
            />
            <Curriculum curriculumData={curricullamData} title="Curriculum" curriculamStyle={curriculamStyle} />
            <Curriculum curriculumData={featureamData} title="Features" curriculamStyle={featureStyle} />
            <Footer />
        </>
    )
}

export default page