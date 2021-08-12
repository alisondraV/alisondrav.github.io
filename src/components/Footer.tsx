import React, { ReactElement } from 'react'
import Github from '@images/Github.png'
import LinkedIn from '@images/LinkedIn.png'
import Medium from '@images/Medium.png'

export default function Footer(): ReactElement {
  return (
    <div className="w-full min-h-12 md:px-20 px-2 py-4 flex md:flex-row flex-col
        justify-between items-center bg-dark-blue shadow-2xl">
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
  )
}
