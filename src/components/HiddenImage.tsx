import React, { ReactElement, useState } from 'react'
import { MotionImage } from '@/components'
import { motion } from 'framer-motion'
import { SignedImageProps } from '@/interfaces'
import { useDebounce } from 'usehooks-ts'

export function HiddenImage({ image, text }: SignedImageProps): ReactElement {
  const [imageVisibility, setImageVisibility] = useState('hidden')
  const debouncedImageVisibility = useDebounce(imageVisibility, 500)

  return (
    <span>
      <motion.span
        onHoverStart={() => { setImageVisibility('') }}
        onHoverEnd={() => { setImageVisibility('hidden') }}
        className='font-header text-2xl font-semibold underline'
      >
        {text}
      </motion.span>
      <MotionImage src={image} classes={`absolute ${debouncedImageVisibility}`} />
    </span>
  )
}
