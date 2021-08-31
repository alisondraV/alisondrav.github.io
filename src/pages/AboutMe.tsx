import React, { ReactElement } from 'react'
import AboutComponent from '@/components/AboutComponent'
import { aboutMeInfo } from '@/utils/AboutMeInfo'
import { SignedImageProps } from '@/interfaces'

export default function AboutMe(): ReactElement {
  return (
    <div className='min-h-screen pt-4 flex flex-col items-center bg-background'>
      <h1 className='mt-16 font-header text-xl md:text-3xl'>About Me</h1>
      <div className='flex flex-col lg:mx-20 mx-8'>
        {aboutMeInfo.map(({ image, text }: SignedImageProps, index) =>
          <AboutComponent
            key={index}
            image={image}
            leftSided={index % 2 === 0}
            text={text}
          />
        )}
      </div>
    </div>
  )
}
