import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { Paths } from '@/utils/routes'
import Acacio from '@images/Acacio.svg'

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
}

const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition
  }
}

const backVariants = {
  exit: { x: 100, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 1, ...transition } }
}

export default function ProjectView():ReactElement {
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
      <motion.div variants={backVariants}>
        <Link to={Paths.PROJECTS}>← Back</Link>
      </motion.div>
    </motion.div>
  )
}
