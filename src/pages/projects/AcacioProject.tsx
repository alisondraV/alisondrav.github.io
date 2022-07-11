import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import Acacio from '@assets/videos/Acacio.gif'
import { textVariants, imageVariants, navigateToGHPage } from '@/utils/projects'

export default function AcacioProject():ReactElement {
  return (
    <motion.div
      className='min-h-screen py-4 bg-background'
      initial='exit'
      animate='enter'
      exit='exit'
    >
      <h1 className='mt-16 text-center mb-12'>Acacio</h1>
      <div className='mx-10 grid sm:grid-cols-4 grid-cols-1 gap-6 items-center text-center'>
        <motion.div variants={textVariants}>
          <h3 className='mb-2'>Tech Stack</h3>
          <ul className='text-left list-disc'>
            <li><b>Next.js</b></li>
            <li><b>React</b></li>
            <li><b>Tailwind</b> is used for styling</li>
            <li><b>Supabase</b> is used for storing data</li>
          </ul>
          <p
            className='underline cursor-pointer'
            onClick={() => navigateToGHPage('https://github.com/ANDREYDEN/acacio')}
          >
            Github
          </p>
        </motion.div>
        <motion.img
          variants={imageVariants}
          src={Acacio}
          alt='Acacio'
          className='sm:col-span-2'
        />
        <motion.div variants={textVariants}>
          This is the graduation project my classmates and I built together for a real client:
          bar Acacia in Ukraine, Dnipro. It is an extension admin dashboard to the Poster system.
          It is used these days for the bar management.
        </motion.div>
      </div>
    </motion.div>
  )
}
