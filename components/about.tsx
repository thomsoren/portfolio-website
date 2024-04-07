"use client" 

import React, { useEffect } from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView("Om"); 

  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175}}
    id="about"
    >
        <SectionHeading>Om meg</SectionHeading> 
        <p className='mb-3'> 
          👋🏼 Hei! Jeg er Thomas, en student med stor lidenskap for teknologi og innovasjon, spesielt innen <span className='italic'>webutvikling, AI-modeller, og spill.</span> Jeg studerer <span className='font-bold'>informatikk ved NTNU Gløshaugen</span> , hvor jeg dykker dypt inn i <span className='italic'>programmering og algoritmer.</span> Ved siden av studiene leder jeg et prosjekt som utvikler en <span className='font-bold'>anbefalingsmodell for Infor</span>, som gir meg erfaring med <span className='underline'>maskinlæring og prosjektledelse. </span>
        </p>

        <p className='mb-3'>
          Utenfor skolen jobber jeg deltid som <span className='font-bold'>vekter</span>, noe som har styrket mine ferdigheter i <span className='underline'>kommunikasjon og teamarbeid.</span> Jeg er alltid på utkikk etter nye utfordringer og muligheter til å utforske og lære. </p>

          <p>Ta gjerne kontakt om du ønsker å diskutere muligheter, ideer, eller bare si hei😁</p>
    </motion.section>

    
  )
}
