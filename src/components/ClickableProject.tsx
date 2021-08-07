import React, { ReactElement, useState } from 'react'
import { ClickableProjectProps } from '@/interfaces'
import { motion } from 'framer-motion'

export default function ClickableProject({ header, image }: ClickableProjectProps):ReactElement {
  const [textVisibility, setTextVisibility] = useState('')

  return (
    <motion.div
      onHoverStart={() => { setTextVisibility('hidden') }}
      onHoverEnd={() => { setTextVisibility('') }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.1 }}
    >
      <div
        className={`absolute bg-dark-blue h-64 w-36 md:h-80 z-10 opacity-80 ${textVisibility}`}
      />
      <div
        className={`flex justify-center items-center absolute h-64 w-36 md:h-80${textVisibility}`}
      >
        <h2 className={`z-20 md:text-xl text-light-yellow ${textVisibility}`}>
          {header}
        </h2>
      </div>
      <img
        src={image}
        alt='project'
        className='h-64 md:h-80 mb-4 cursor-pointer opacity-80'
      />
    </motion.div>
  )
}
