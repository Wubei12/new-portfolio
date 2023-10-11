"use client"


import Image from 'next/image'
import React, { useEffect } from 'react'
import myPic from '../public/myPic.png'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowDown, BsLinkedin } from "react-icons/bs"
import { HiDownload } from "react-icons/hi"
import { FaGithubSquare } from 'react-icons/fa'
import { url } from 'inspector'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'
import { useSectionInView } from '@/lib/hooks/hooks'


export default function Intro() {

    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()

    return (
        <section id='home' ref={ref} className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0">
            <div className="flex items-center justify-center">
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2
                        }}
                    >

                        <Image className='h-28 w-28 object-cover border-white shadow-xl border-[0.35rem] rounded-full' src={myPic} alt='Wubshet Portrait' width="192" height="192" quality="95" priority={true} />
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7
                        }}
                        className=' absolute -bottom-1 -right-1 text-4xl'>
                        👋🏾
                    </motion.span>
                </div>

            </div>
            <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}

                className='mb-10 mt-4 sm:text-4xl text-2xl font-medium !leading-[1.5]'>
                <span className="font-bold text-[#7a70c9]">Hello, I'm Wubei.</span> {`I'm a`} <span className="font-bold text-[#dd6d71]">self-taught frontend</span> <span className="font-bold text-[#7a70c9]">developer</span>  with <span className="font-bold text-[#7a70c9]">6 years</span> of work experience in various industries. I enjoy building <span className="italic text-[#dd6d71]">sites &</span> <span className="italic text-[#7a70c9]">apps</span>. My focus is <span className="underline  text-[#dd6d71] italic">React (Next.js)</span>.
            </motion.h1>


            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1
                }}

                className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'>
                <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 transition hover:scale-110 hover:bg-gray-950 active:scale-105'
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick;
                    }}
                >Contact me <BsArrowDown className="opacity-70 group-hover:translate-y-1 group-active:translate-y-0 transition" /> </Link>

                <a className=' group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 transition hover:scale-110 active:scale-105 cursor-pointer borderBlack dark:bg-white/10' href='/Wubshet Demissie- Résumé .pdf' download>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 group-active:translate-y-0 transition" /> </a>

                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] transition hover:scale-[1.15] hover:text-gray-950 active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60" href="https://www.linkedin.com/in/wubshet-demissie-012923122?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B276ux4UgREqDIOAz3j8e%2BA%3D%3D" target='_blank'>
                    <BsLinkedin />
                </a>

                <a className=' bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] transition hover:scale-[1.15] hover:text-gray-950 active:scale-105 cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60' href="https://www.github.com/Wubei12" target='_blank'>
                    <FaGithubSquare />
                </a>

            </motion.div>
        </section>
    )
}
