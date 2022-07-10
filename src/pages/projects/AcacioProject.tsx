import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Paths } from '@/utils/routes'
import Acacio from '@images/Acacio.svg'
import { backVariants, imageVariants, navigateToGHPage } from '@/utils/projects'

export default function AcacioProject():ReactElement {
  return (
    <motion.div
      className='min-h-screen py-4 bg-background'
      initial='exit'
      animate='enter'
      exit='exit'
    >
      <h1 className='mt-16 text-center mb-12'>Acacio</h1>
      <motion.img
        variants={imageVariants}
        src={Acacio}
        alt='Acacio'
      />
      <p
        className='underline cursor-pointer'
        onClick={() => navigateToGHPage('https://github.com/ANDREYDEN/acacio')}
      >
        Github
      </p>
      <motion.div variants={backVariants}>
        <Link to={Paths.PROJECTS}>← Back</Link>
      </motion.div>
    </motion.div>
  )
}
