import React, { ReactElement } from 'react'
import Alisa from '@images/AlisaAbout.jpg'
import AboutComponent from '@/components/AboutComponent'

export default function AboutMe(): ReactElement {
  return (
    <div className='min-h-screen pt-4 flex flex-col items-center bg-background'>
      <h1 className='mt-16 font-header text-xl md:text-3xl'>About Me</h1>
      <div className='flex flex-col mx-20'>
        <AboutComponent
          image={Alisa}
          leftSided={true}
          text='I love my life. That’s the first thing that comes to my mind when
            I think about myself. I am a Ukrainian girl, who came to Canada for studying computer
            programming and developing in this sphere. I am very young, but I love each aspect of
            my life and my journey so far. And I want to share this love and passion with the world.'
        />
        <AboutComponent
          image={Alisa}
          leftSided={false}
          text='People are something I love the most in life. So they deserve a special part on my website.
                My amazing and loving family (parents, grandparents, sisters, aunt, uncle),
                who I try to call as often as I can, when ocean separates as.'
        />
      </div>
    </div>
  )
}
