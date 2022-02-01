import React, { ReactElement } from 'react'
import { AboutComponentProps } from '@/interfaces'
import { ParallaxLayer } from '@react-spring/parallax'

export default function AboutComponent({ offset, image, text }: AboutComponentProps): ReactElement {
  const formattedText = () => {
    return (
      <div className='flex flex-col items-end'>
        {text.split('<br/>').map((item, i) =>
          <p key={i} className='text-regular text-sm md:text-base text-center md:px-16 px-4 lg:w-1/2 w-full'>
            {item}{<br/>}
          </p>
        )}
      </div>
    )
  }

  return (
    <>
      <ParallaxLayer
        offset={offset}
        speed={0.3}
        className={`flex items-center justify-center lg:justify-start
         ${offset === 0 ? 'md:mt-12 lg:ml-12' : 'md:ml-10'}`}>
        <img
          src={image}
          alt='AboutMe'
          className={'lg:w-96 w-4/5 lg:mb-0 lg:mr-12'}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={offset} speed={0.75}>
        <div className='flex justify-end items-center w-full h-full'>
          <div className={`lg:w-1/2 w-full ${offset === 0 ? 'h-1/2' : 'h-3/4'} bg-opacity-80
           lg:bg-opacity-60 lg:bg-light-green bg-background`} />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={offset}
        speed={0.5}
        className='flex items-center'>
        {formattedText()}
      </ParallaxLayer>
    </>
  )
}