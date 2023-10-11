"use client";

import Link from 'next/link'
import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion"
import { useSectionInView } from '@/lib/hooks/hooks';

function About() {

    const { ref } = useSectionInView("About")
    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"

            className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 '>
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>// I'm not your normal developer</p>

            <p className='mb-3'>
                I originally graduated with a Bachelor's degree in <strong className='font-medium'>Water Supply and Sanitary Engineering</strong>. I've spent the past 6 years in the construction industry, working as a site engineer, project manager and Contractor on MEP (Mechanical, Electrical, and Sanitary Plumbing) installation projects. I have always had a knack for new technologies and working with computers. In 2020, I began work as a BIM Technician in a revolutionary tech startup based in the US, called ioToad LLC. I was in charge of modelling MEP services in virtual environments assisting in virtual design and coordination of big consruction projects also based within the US. This was when I also was introduced to programming, as we were always kin on finding new ways to automate the work we do and find solutions effectively, using programming languages such as <strong className='font-medium'>Python</strong>.
            </p>
            <p>
                Fascinated with how intricate programming can be, and how it can be used to build even awesome responsive and interactive websites, I was quickly drawn to learn more. I immediately started to learn <strong className='font-medium'>HTML and CSS</strong>, and was even more pulled in when I was introduced to <strong className='font-medium'>Javascript</strong> and its fantastic frameworks. I then found myself hooked, even challenging myself more to learn some other complex web design technologies in the back-end side of the whole. I am now spending my time building projects with <strong className='font-medium'>React JS, Django, Firebase</strong> and learning other new technologies.
            </p>

            <p> <span><Link href='#projects' className='underline' >Click here</Link></span> to check out some of my latest projects down below.</p>
        </motion.section >
    )
}

export default About