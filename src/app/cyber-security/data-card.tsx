import React from 'react'



const OTHER_COURSES = [
    {
        img: "/image/cyber/img_57.png",
        title: "Self-Instructional Lessons",
        desc: "To the greatest extent possible, we want the curriculum to be self-administered. Even with kindergarten students, it is possible to provide lessons that students can do independently or with very little help.",
    },
    {
        img: "/image/cyber/img_58.png",
        title: "Lesson Mastery",
        desc: "Each lesson in the curriculum carries an independent mastery to ensure that the lesson has been learned. After completing a lesson, the students take a mastery test to demonstrate that they have comprehended and assimilated the lesson content."
    },
    {
        img: "/image/cyber/img_59.png",
        title: "Continuous Progress",
        desc: "This is the key to successful instruction. Each student progresses at his/her own rate through the curriculum. Some students may need only a day or two to complete and master a lesson. Other students may need the full allotted days in order to progress, and a few students may take more than the allotted time in order to complete the lesson."
    }, {
        img: "/image/cyber/img_60.jpg",
        title: "Physical Development",
        desc: "Physical development is the way your child moves his/her arms and legs (large motor skills) and uses the small muscles in their fingers and hands (small motor skills). Playing outside and taking physical activity breaks during the day helps children build healthy bones and muscles, focus better, and feel less stress. Doing puzzles, writing, drawing, and working with clay are some activities that develop childrens finger and hand control."
    }, {
        img: "/image/cyber/img_61.png",
        title: "Language & Literacy Development",
        desc: "Language and literacy development includes understanding language and communicating through reading, writing, listening, and talking. Literacy is a big focus in kindergarten. Your child will use these skills throughout his life."
    }, {
        img: "/image/cyber/img_62.jpg",
        title: "Thinking or Cognitive Skill",
        desc: "Thinking, or cognitive, skills develop as children explore, observe, create, ask questions, do new tasks, and solve problems. Teachers help children plan what they're going to do, encourage children to discuss and think more deeply about ideas, and include children when making decisions"
    },
];

const DataCard = () => {
    return (
        <>
            <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-3">

                {OTHER_COURSES.map((props, idx) => (
                    <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                            <img className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
                                src={props.img} alt="investment-seed-round" />
                        </div>
                        <div className="p-4">
                            <h6 className="mb-2 text-slate-800 text-xl font-semibold">
                                {props.title}
                            </h6>
                            <p className="text-slate-600 leading-normal font-light">
                                {props.desc}                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}

export default DataCard