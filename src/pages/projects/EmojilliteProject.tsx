import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import Emojillite from '@assets/videos/Emojillite.gif'
import { textVariants, imageVariants, navigateToLink } from '@/utils/projects'

export default function EmojilliteProject():ReactElement {
  return (
    <motion.div
      className='min-h-screen py-4 bg-background'
      initial='exit'
      animate='enter'
      exit='exit'
    >
      <h1 className='mt-16 text-center mb-12'>Emojillite</h1>
      <div className='mx-10 grid sm:grid-cols-3 grid-cols-1 gap-6 items-center text-center'>
        <motion.div variants={textVariants}>
          <h3 className='mb-2'>Tech Stack</h3>
          <ul className='text-left list-disc pl-10'>
            <li><b>Python</b></li>
            <li><b>JavaScript</b></li>
            <li>EarthData (NOAA data)</li>
            <li>WorldWind (Planet simulation)</li>
          </ul>
          <p
            className='underline cursor-pointer'
            onClick={() => navigateToLink('https://github.com/ANDREYDEN/space-apps-2019')}
          >
            Github
          </p>
          <p
            className='underline cursor-pointer'
            onClick={() => navigateToLink('https://emojillite.herokuapp.com/')}
          >
            Live Website!
          </p>
        </motion.div>
        <div className='flex justify-center h-96'>
          <motion.img
            variants={imageVariants}
            src={Emojillite}
            alt='Emojillite'
          />
        </div>
        <motion.div variants={textVariants}>
          Emojillite is a tool for people to explore major satellites that orbit Earth and discover the data
          they are collecting. Emojillite uses emojis to visualize the real-time satellite data
          as well as their positioning to entertain and educate people on what data is collected and
          what it is used for.My friends and I built this little project during the hackathon.
        </motion.div>
      </div>
    </motion.div>
  )
}
