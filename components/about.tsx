"use client" 

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView("About"); 

  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175}}
    id="about"
    >
        <SectionHeading>About me</SectionHeading> 
        <p className='mb-3'> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit nihil facere voluptates provident fuga quos corporis quam consequatur rerum hic dolorum blanditiis qui suscipit, facilis temporibus sapiente? Est, fugit commodi.
        </p>

        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam omnis quibusdam vitae! Voluptate quam amet molestias numquam praesentium culpa incidunt laudantium. Ipsa laboriosam repellat ullam animi deleniti quos nostrum at!</p>
    </motion.section>

    
  )
}
