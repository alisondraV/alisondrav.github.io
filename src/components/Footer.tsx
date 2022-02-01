import React, { ReactElement } from 'react'
import Github from '@images/Github.png'
import LinkedIn from '@images/LinkedIn.png'
import Medium from '@images/Medium.png'
import { routes } from '@/utils/routes'

export default function Footer(): ReactElement {
  return (
    <div className={'w-full md:h-40 md:px-24 md:px-2 px-8 py-4 flex flex-col shadow-2xl' +
        ' justify-between bg-dark-blue'}>
      <div className='flex md:flex-row flex-col justify-between'>
        <div className='flex flex-col text-background mb-2 md:mb-2'>
          {routes.map(route =>
            <a key={route.name} href={route.route} className='hover:underline text-xs mb-1'>{route.name}</a>
          )}
        </div>
        <div className='text-background text-center flex flex-col mb-4 md:mb-auto'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={'https://drive.google.com/file/d/17hCxlDL-dl-aNSIr_fdxHBkxqCHnQ6jb/view?usp=sharing'}
            className='text-xs border-2 px-4 py-1 mb-2 border-background'
          >
            Resume
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={'mailto:alice.7414122013@gmail.com'}
            className='text-xs border-2 px-4 py-1 border-background'
          >
            Contact Me
          </a>
        </div>
      </div>
      <hr className='text-background mb-4 md:mb-auto' />
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <span className='flex mb-4 md:mb-auto'>
          <a target='_blank' rel='noopener noreferrer' href='https://github.com/alisondraV'>
            <img className='rounded mr-4' width='40px' src={Github} alt='Github' />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://www.linkedin.com/in/alisa-vynohradova/'>
            <img className='rounded mr-4' width='40px' src={LinkedIn} alt='LinkedIn' />
          </a>
          <a target='_blank' rel='noopener noreferrer' href='https://alisondrav.medium.com/'>
            <img className='rounded' width='40px' src={Medium} alt='Medium' />
          </a>
        </span>
        <span className='text-background text-xs'>© Alisa Vynohradova 2021</span>
      </div>
    </div>
  )
}
