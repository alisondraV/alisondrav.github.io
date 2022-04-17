import React, { ReactElement } from 'react'
import AboutComponent from '@/components/AboutComponent'
import { aboutMeInfo } from '@/utils/AboutMeInfo'
import { SignedImageProps } from '@/interfaces'
import { Parallax } from '@react-spring/parallax'
import { CaretRight } from 'react-iconly'

export default function AboutMe(): ReactElement {
  return (
    <>
      <Parallax
        className='pt-4 bg-background'
        pages={aboutMeInfo.length}
        horizontal
      >
        <div className='w-screen h-screen'>
          <h1 className='lg:mt-16 mt-12 lg:mb-auto text-center'>About Me</h1>
          {aboutMeInfo.map(({ image, text }: SignedImageProps, index) =>
            <AboutComponent
              offset={index}
              key={index}
              image={image}
              text={text}
            />
          )}
        </div>
      </Parallax>
      <span className='absolute bottom-4 right-8 animate-pulse'>
        <CaretRight set='light' size='xlarge' primaryColor='#1C3A53' />
      </span>
    </>
  )
}
