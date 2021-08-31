import React, { ReactElement } from 'react'
import Alisa from '@images/AlisaAbout.jpg'
import AboutComponent from '@/components/AboutComponent'
import AboutMeInfo from '@/utils/AboutMeInfo.json'

export default function AboutMe(): ReactElement {
  return (
    <div className='min-h-screen pt-4 flex flex-col items-center bg-background'>
      <h1 className='mt-16 font-header text-xl md:text-3xl'>About Me</h1>
      <div className='flex flex-col lg:mx-20 mx-8'>
        <AboutComponent
          image={Alisa}
          leftSided={true}
          text={AboutMeInfo.Intro}
        />
        <AboutComponent
          image={Alisa}
          leftSided={false}
          text={AboutMeInfo.People}
        />
        <AboutComponent
          image={Alisa}
          leftSided={true}
          text={AboutMeInfo.PeopleSecond}
        />
        <AboutComponent
          image={Alisa}
          leftSided={false}
          text={AboutMeInfo.Story}
        />
        <AboutComponent
          image={Alisa}
          leftSided={true}
          text={AboutMeInfo.StorySecond}
        />
      </div>
    </div>
  )
}
