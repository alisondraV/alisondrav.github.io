import React, { ReactElement } from 'react'
import Github from '@images/Github.png'
import LinkedIn from '@images/LinkedIn.png'
import Medium from '@images/Medium.png'

export default function Footer(): ReactElement {
  return (
    <div className='w-full md:h-40 md:px-24 px-2 py-4 flex flex-col bg-dark-blue shadow-2xl justify-between'>
      <div className='flex md:flex-row flex-col justify-between'>
        <div className='flex flex-col text-background'>
          <a href={'/'} className='hover:underline text-xs mb-1'>Main</a>
          <a href={'/about-me'} className='hover:underline text-xs mb-1'>Who am I?</a>
          <a href={'/projects'} className='hover:underline text-xs mb-1'>Projects</a>
          <a href={'/articles'} className='hover:underline text-xs'>Articles</a>
        </div>
        <div className='text-background text-center flex flex-col'>
          <a
            href={'https://drive.google.com/file/d/17hCxlDL-dl-aNSIr_fdxHBkxqCHnQ6jb/view?usp=sharing'}
            className='text-xs border-2 px-4 py-1 mb-2'
          >Resume</a>
          <a href={'mailto:alice.7414122013@gmail.com'} className='text-xs border-2 px-4 py-1'>Contact Me</a>
        </div>
      </div>
      <hr className='text-background' />
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <span className='flex mb-4 md:mb-auto'>
          <a href='https://github.com/alisondraV'>
            <img className='rounded mr-4' width='40px' src={Github} alt='Github' />
          </a>
          <a href='https://www.linkedin.com/in/alisa-vynohradova/'>
            <img className='rounded mr-4' width='40px' src={LinkedIn} alt='LinkedIn' />
          </a>
          <a href='https://alisondrav.medium.com/'>
            <img className='rounded' width='40px' src={Medium} alt='Medium' />
          </a>
        </span>
        <span className='text-background text-xs'>© Alisa Vynohradova 2021</span>
      </div>
    </div>
  )
}