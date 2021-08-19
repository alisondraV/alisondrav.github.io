import React, { ReactElement } from 'react'
import { AboutComponentProps } from '@/interfaces'

export default function AboutComponent({ image, text }: AboutComponentProps): ReactElement {

  return (
    <>
      <img src={image} alt='Alisa' width='600px' className='flex-1' />
      <p className='flex-1 ml-10'>{text}</p>
    </>
  )
}