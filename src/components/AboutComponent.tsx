import React, { ReactElement } from 'react'
import { AboutComponentProps } from '@/interfaces'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

export default function AboutComponent({ image, leftSided, text }: AboutComponentProps): ReactElement {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [100, 100], [0, -10])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  return (
    <div className='flex flex-col md:flex-row h-screen items-center md:flex-shrink-0'>
      {!leftSided && <motion.p className='flex-1 text-center mx-10' style={{ y: y2 }}>{text}</motion.p>}
      <motion.img
        src={image}
        alt='Alisa'
        width='700px'
        style={{ y: y1 }}
      />
      {leftSided && <motion.p className='flex-1 text-center mx-10' style={{ y: y2 }}>{text}</motion.p>}
    </div>
  )
}