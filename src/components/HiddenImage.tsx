import React, { ReactElement, useState } from 'react'
import { MotionImage } from '@/components'
import { motion } from 'framer-motion'
import { SignedImageProps } from '@/interfaces'

export function HiddenImage({ image, text }: SignedImageProps): ReactElement {
  const [imageVisibility, setImageVisibility] = useState('hidden')

  return (
    <motion.span
      onHoverStart={() => { setImageVisibility('') }}
      onHoverEnd={() => { setImageVisibility('hidden') }}
      className='font-header text-2xl font-semibold underline'
    >
      {text}
      <MotionImage src={image} classes={`absolute right-1/4 bottom-1/3 ${imageVisibility}`} />
    </motion.span>
  )
}