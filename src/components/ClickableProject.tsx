import React, { ReactElement, useState } from 'react'
import { ClickableProjectProps } from '@/interfaces'
import { motion } from 'framer-motion'

export default function ClickableProject({ header, image }: ClickableProjectProps):ReactElement {
  const [textVisibility, setTextVisibility] = useState('')

  return (
    <motion.span
      onHoverStart={() => { setTextVisibility('hidden') }}
      onHoverEnd={() => { setTextVisibility('') }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.1 }}
    >
      <div
        className={`absolute bg-dark-blue h-64 w-34 md:h-80 rounded-xl z-10 opacity-70 ${textVisibility}`}
      />
      <img
        src={image}
        alt='project'
        className='h-64 md:h-80 rounded-xl mb-4 cursor-pointer opacity-80'
      />
      <div>
        <h2 className={`text-center md:text-xl ${textVisibility}`}>{header}</h2>
      </div>
    </motion.span>
  )
}
