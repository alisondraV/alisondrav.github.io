import React, { ReactElement, useRef, useState } from 'react'
import { ProjectProps } from '@/interfaces'
import { motion, useCycle } from 'framer-motion'
import { Link } from 'react-router-dom'

const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

const projectVariants = {
  // open: (height = 1000) => ({
  //   clipPath: `circle(${height}px)`,
  //   transition: {
  //     type: 'spring',
  //     stiffness: 20,
  //     restDelta: 2
  //   }
  // }),
  // closed: {
  //   clipPath: 'circle(100px)',
  //   transition: {
  //     type: 'spring',
  //     stiffness: 400,
  //     damping: 40
  //   }
  // },
  initial: { scale: 0.9, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 0.5,
    opacity: 0,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    transition: { duration: 1.5, ...transition }
  }
}

export default function ClickableProject({ header, image, linkToPage }: ProjectProps):ReactElement {
  const [textVisibility, setTextVisibility] = useState('')
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)

  return (
    <motion.div
      // initial={false}
      // animate={isOpen ? 'open' : 'closed'}
      // ref={containerRef}
      variants={projectVariants}
    >
      <motion.div
        onHoverStart={() => setTextVisibility('hidden')}
        onHoverEnd={() => setTextVisibility('')}
        onClick={() => toggleOpen()}
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
