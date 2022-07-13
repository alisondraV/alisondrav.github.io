import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import Foodizzy from '@assets/videos/Foodizzy.gif'
import { textVariants, imageVariants, navigateToGHPage } from '@/utils/projects'

export default function FoodizzyProject():ReactElement {
  return (
    <motion.div
      className='min-h-screen py-4 bg-background'
      initial='exit'
      animate='enter'
      exit='exit'
    >
      <h1 className='mt-16 text-center mb-12'>Foodizzy</h1>
      <div className='mx-20 grid sm:grid-cols-3 grid-cols-1 gap-6 items-center text-center'>
        <motion.div variants={textVariants}>
          <h3 className='mb-2'>Tech Stack</h3>
          <ul className='text-left list-disc'>
            <li><b>Vue</b></li>
            <li><b>TypeScript</b></li>
            <li>Firebase</li>
          </ul>
          <p
            className='underline cursor-pointer'
            onClick={() => navigateToGHPage('https://github.com/alisondraV/foodizzy')}
          >
            Github
          </p>
          <p
            className='underline cursor-pointer'
            onClick={() => navigateToGHPage('https://foodizzy-app.web.app/')}
          >
            Live Website!
          </p>
        </motion.div>
        <div className='flex justify-center'>
          <motion.img
            variants={imageVariants}
            src={Foodizzy}
            alt='Foodizzy'
            className='h-96'
          />
        </div>
        <motion.div variants={textVariants}>
          Foodizzy is a tool for keeping track of countless shopping lists and reducing needless food waste.
          This is a project we started building with my friends during a hackathon, but we continued
          working on it even after the event. We use it in our lives now, and it is a great experience!
        </motion.div>
      </div>
    </motion.div>
  )
}
