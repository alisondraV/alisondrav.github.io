import React, { ReactElement, useState } from 'react'
import SurpriseImage from '@images/Surprise.jpeg'
import { motion } from 'framer-motion'

export function Surprise(): ReactElement {
  const [surpriseVisibility, setSurpriseVisibility] = useState('hidden')

  return (
    <motion.a
      onHoverStart={() => { setSurpriseVisibility('') }}
      onHoverEnd={() => { setSurpriseVisibility('hidden') }}
      className='absolute bottom-0 right-20 mb-4 underline'
    >
            Hover Me
      <motion.img
        whileHover={{ scale: 5 }}
        transition={{ ease: 'easeOut', duration: 2 }}
        src={SurpriseImage}
        className={surpriseVisibility}
        alt="Surprise"
      />
    </motion.a>
  )
}