import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'

interface MotionImageProps {
    src: string;
    classes: string
}

export function MotionImage({ src, classes }: MotionImageProps): ReactElement {
  return (
    <motion.img
      alt='MotionImage'
      className={classes}
      src={src}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    />
  )
}