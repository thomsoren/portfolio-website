"use client"
import Image from 'next/image'
import myImage from './IMG_2507.png'
import { motion } from 'framer-motion'
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link'
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5); 
  const {setActiveSection, setTimeOfLastClick}= useActiveSectionContext();

  return (
    <section ref={ref} id='home' className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-40">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={myImage}
              alt="Bilde av Thomas"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-x1"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋🏼
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hei, jeg heter Thomas. </span>
        Jeg er en <span className="font-bold">fullstack-utvikler</span> som
        elsker å lage ting. Jeg har jobbet med webutvikling i{" "}
        <span className="font-bold">noen måneder.</span> Jeg liker å lage{" "}
        <span className="italic"> nettsider og spill. </span> Mitt fokus er{" "}
        <span className="underline">React (Next.js)</span>
      </motion.h1>

      <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium' 
        initial= {{opacity: 0, y: 100}}
        animate= {{opacity: 1, y: 0}}
        transition= {{delay: 0.1}
        }>
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
          outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now()); 
          }}
        >
          {" "}
          Contact me here <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
        </Link>

        <a className="group bg-white px-7 py-3 flex imtems-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack" href="/CV.pdf" download>
          {" "}
          Download CV <HiDownload 
          className='opacity-60 group-hover:translate-y-1 transition'/>{" "}
        </a>
        
        <a className="group bg-white p-4 text-gray-700 flex imtems-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack" href="https://www.linkedin.com/in/thomas-nordby-sørensen-80253b1ab" target="_blank">
          <BsLinkedin />
        </a>

        <a className="bg-white p-4 text-gray-700 flex imtems-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack" href='https://github.com/thomsoren?tab=overview&from=2024-03-01&to=2024-03-23' target='_blank'>
          <FaGithubSquare />
        </a>

      </motion.div>
    </section>
  );
}
