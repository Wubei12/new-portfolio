"use client";

import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'

import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data'
import { useSectionInView, useTheme } from '@/lib/hooks/hooks';

function Experience() {
    const { ref } = useSectionInView("Experience");

    const { theme } = useTheme();

    return (
        <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
            <SectionHeading>
                My Expeirence
            </SectionHeading>
            <VerticalTimeline animate lineColor=''>
                {experiencesData.map((exp, index) => (
                    <VerticalTimelineElement
                        visible
                        key={index}
                        contentStyle={{
                            background: theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight: theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)"
                        }}
                        date={exp.date}
                        icon={exp.icon}
                        iconStyle={{
                            background: theme === "light" ? "ehite" : "rgba(255, 255, 255, 0.5)",
                            fontSize: "1.5rem"
                        }}

                    >
                        <h3 className=' font-semibold capitalize vertical-timeline-element-title'> {exp.title} </h3>
                        <p className=' font-normal !mt-0 vertical-timeline-element-subtitle'> {exp.location} </p>
                        <p className='!mt-1 !font-normal text-gray-700 dark:text-white/75'> {exp.description} </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>

        </section>
    )
}

export default Experience