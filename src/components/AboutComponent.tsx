import React, { ReactElement } from 'react'
import { AboutComponentProps } from '@/interfaces'
import { motion, useTransform, useViewportScroll } from 'framer-motion'

export default function AboutComponent({ image, leftSided, text }: AboutComponentProps): ReactElement {
  const { scrollY } = useViewportScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -100])
  const y2 = useTransform(scrollY, [0, 275], [0, -75])

  const formattedText = () => {
    return (
      <div className='flex flex-col'>
        {text.split('<br/>').map((item, i) =>
          <motion.p
            key={i}
            className='flex-1 text-regular text-center lg:mx-10'
            style={{ y: y2 }}
          >
            {item}{<br/>}
          </motion.p>
        )}
      </div>
    )
  }

  return (
    <div className='flex flex-col lg:flex-row min-h-screen lg:-my-10 items-center lg:flex-shrink-0'>
      {!leftSided && formattedText()}
      <motion.img
        src={image}
        alt='Alisa'
        width='650px'
        style={{ y: y1 }}
      />
      {leftSided && formattedText()}
    </div>
  )
}