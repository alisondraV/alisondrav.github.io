import React, { ReactElement, useState } from 'react'
import { ProjectProps } from '@/interfaces'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const projectVariants = {
  initial: { scale: 0.9, opacity: 0 },
  enter: {
    scale: 1,
    opacity: 1,
    clipPath: 'circle(100px)',
    transition: {
      stiffness: 20,
      restDelta: 2,
      ...transition
    }
  },
  exit: {
    scale: 2,
    opacity: 0,
    clipPath: 'circle(100px)',
    transition: {
      stiffness: 100,
      damping: 40,
      ...transition
    }
  }
}

export default function ClickableProject({ header, image, linkToPage }: ProjectProps):ReactElement {
  const [textVisibility, setTextVisibility] = useState('')

  return (
    <motion.div variants={projectVariants}>
      <motion.div
        onHoverStart={() => setTextVisibility('hidden')}
        onHoverEnd={() => setTextVisibility('')}
        transition={transition}
        whileHover={{ scale: 1.1 }}
      >
        <div className={`absolute bg-dark-blue h-64 w-36 md:h-80 z-10 opacity-90 ${textVisibility}`} />
        <div className={`flex justify-center items-center absolute h-64 w-36 md:h-80 ${textVisibility}`}>
          <h3 className={`z-20 md:text-xl text-light-yellow underline ${textVisibility}`}>
            {header}
          </h3>
        </div>
        <Link to={linkToPage}>
          <motion.img
            src={image}
            alt='project'
            className='h-64 w-36 md:h-80 mb-4 cursor-pointer opacity-90'
            transition={transition}
          />
        </Link>
      </motion.div>
    </motion.div>
  )
}
