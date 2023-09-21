import React, { ReactElement, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface MotionImageProps {
    src: string;
    classes: string
}

export function MotionImage({ src, classes }: MotionImageProps): ReactElement {
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 })

  const mouseMoveHandler = (event: MouseEvent) => {
    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseMoveHandler)
    return (() => {
      window.removeEventListener('mousemove', mouseMoveHandler)
    })
  })

  return (
    <motion.img
      alt='MotionImage'
      className={classes}
      src={src}
      style={{ left: mouseCoordinates.x - 215, top: mouseCoordinates.y - 215 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    />
  )
}
