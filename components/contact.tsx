"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail' 
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import SubmitBTN from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {

  const { ref } = useSectionInView("Kontakt"); 
    const { pending} = useFormStatus();

  return (
    <motion.section ref={ref} id="contact" className='mt-28 scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center'
        initial={{ 
            opacity: 0, 
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1
        }}
        viewport={{ once: true }}
        >
        <SectionHeading>Kontakt meg</SectionHeading>
        <p className='text-gray-700 -mt-6'>Kontakt meg gjerne direkte til  <a className='underline' href="mailto:tsorensen007@gmail.com">tsorensen007@gmail.com</a> eller gjennom dette skjemaet</p>

        <form  className='mt-10 flex flex-col ' 
        action={async (formData) => {
            const { data, error } = await sendEmail(formData);

            if (error) {
                toast.error(error);
            }

            toast.success('Takk for meldingen! Jeg vil svare deg så snart som mulig.')
        }}>
            <input className="h-14 px-4 rounded-lg borderBlack focus:border-black" name="senderEmail" 
            type="email" 
            required 
            maxLength={500}
            placeholder='Din epost' />
            <textarea className='h-52 my-3 rounded-lg borderBlack p-4 focus:border-black' 
            required
            maxLength={5000}
            name="message" 
            placeholder='Din melding'/>
            
            <SubmitBTN /> 
             </form> 
    </motion.section>
  );
}
