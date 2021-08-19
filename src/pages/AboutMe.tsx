import React, { ReactElement } from 'react'
import Alisa from '@images/AlisaAbout.jpg'
import AboutComponent from '@/components/AboutComponent'

export default function AboutMe(): ReactElement {
  return (
    <div className='h-screen pt-4 flex flex-col items-center bg-background'>
      <h1 className='mt-16 font-header text-xl md:text-3xl'>About Me</h1>
      <div className='flex flex-col md:flex-row flex-grow mx-10 justify-center items-center'>
        <AboutComponent
          image={Alisa}
          text='I love my life. That’s the first thing that comes to my mind when
            I think about myself. I am a Ukrainian girl, who came to Canada for studying computer
            programming and developing in this sphere. I am very young, but I love each aspect of
            my life and my journey so far. And I want to share this love and passion with the world.'
        />
      </div>
    </div>
  )
}
