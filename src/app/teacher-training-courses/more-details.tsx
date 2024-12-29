"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";

const FEATURES = [
    {
        title: "Accreditations, Memberships and Association",
        description:
            "Accreditation is of utmost importance for a teacher training course. The value of a teacher training institute lies in its accreditation. Accreditation reflects not only the quality of an institution but also indicates the recognition and validation of the courses with a particular provider. London College of Teachers and Trainers ensures that the students have high quality training and improved employment opportunities. London College of Teachers and Trainers is a proud associate of several well-regarded professional institutions and is accredited by eminent organizations. London College of Teachers and Trainers is one of the global leaders in Teachers Training and trains thousands globally. Our curriculum also meets internationally recognized requirements and externally moderated by renowned bodies of the world.",
    },
    {
        title: "Approved Center of OTHM",
        description:
            "OTHM is an UK based of Qual (Under UK Govt) regulated organization and an awarding body. OTHM offers a range of professional programs and their learners are eligible for top-up degree programs as well as Master programs in university. London College of Teachers and Trainers are an accredited OTHM training institute, which means that we have gone through a meticulous evaluation process. Please visit the following link :- https://www.othm.org.uk/ to Verify Credentials of LCTT",
    },
    {
        title: "International Association of Teachers of English as Foreign Language (IATEFL)",
        description: "London College of Teachers and Trainers is now a proud member of the International Association of Teachers of English as Foreign Language or IATEFL. IATEFL Is a 50 year old organization, connecting and mentoring English teachers and constantly developing professionals. London College of Teachers and Trainers will strive to learn and grow in the ESL field with IATEFL.",
    },
    {
        title: "Quality Assurance in Higher Education (QAHE)",
        description: "LCTT due to its high repute and global standard of courses has been accredited by Association for Quality Assurance in Higher Education. QAHE is an international institute, which recognizes, endorses and accredits quality educational institutions across the globe. The main goal of QAHE is to support and develop quality educational platforms worldwide. LCTT is proud to be accredited and be featured in their website. The following had been assessed by QAHE before granting accreditation to the institute. London College of Teachers & Trainers needs to go through the evaluation process every year to maintain accreditation from QAHE.",
    },
    {
        title: "Chattered College of Teaching – UK",
        description: "The Very Prestigious Chartered College of Teaching, UK (membership number P0096) previously known as the Royal Charter, UK is an eminent organization dedicated to teaching and classroom practice. The editorial board comprises of educators from all over the world. The chartered college recognizes knowledge, skills and behavior of teaching expertise. Our students pursuing the course will get exposure to the global methodologies of teaching. For nearly 170 years the teaching profession has had a Royal Charter, initially granted by Queen Victoria in 1849 to the College of Preceptors, to protect and serve teachers. In 2017, this Royal Charter was transferred to a new professional body – the Chartered College of Teaching. The Chartered College of Teaching succeeds the College of Teachers, who previously held the Royal Charter for the teaching profession",
    },
    {
        title: "Go Abroad",
        description: "London College of Teachers and Trainers has been awarded the best teachers training organization in 2020 by Go Abroad. Go Abroad is a most reputed organization in the world dealing with TEFL/TESOL Courses, teachers training and teaching jobs",
    },
    {
        title: "The Quality Council of India (QCI)",
        description: "London College of Teachers and Trainers is a proud member having its membership ( Member No CORP/EDU/6505/2019-20 - QCI) of The Quality Council of India (QCI) – a non-profit autonomous society registered under Societies Registration Act XXI of 1860 to establish an accreditation structure in the country and to spread quality movement in India by undertaking a National Quality Campaign. QCI is propagating, adopting and adhering to quality standards in all important spheres of activities including education",
    }
];

const MoreDetails = () => {
    return (
        <>
            <section className="py-12 px-8">
                <div className="container mx-auto  place-items-center">
                    {
                        FEATURES.map(({ title, description }) => (
                            <div className="col-span-2 lg:pl-24">
                                <Typography variant="h2" color="blue-gray" className="mb-4" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                                    {title}
                                </Typography>
                                <Typography
                                    variant="lead"
                                    className="mb-5 max-w-fit px-4 text-left text-lg !text-gray-500 lg:px-0"
                                    placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}
                                >
                                    {description}
                                </Typography>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default MoreDetails
