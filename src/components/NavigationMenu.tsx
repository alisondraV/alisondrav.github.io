import React, { ReactElement, useState } from 'react'
import { motion } from 'framer-motion'
import { CustomLink } from '@/components'
import MenuClose from '@images/MenuClose.svg'
import MenuDrD from '@images/MenuDrD.svg'
import MenuDrDBackground from '@images/MenuDrDBackground.svg'
import { Paths, routes } from '@/utils/routes'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

export default function NavigationMenu(): ReactElement {
  const [visibility, setVisibility] = useState('hidden')

  const isOnTheWritingPage = location.hash === `#${Paths.WRITING}`
  const isNavBarTransparent = location.hash === `#${Paths.MAIN}` || isOnTheWritingPage

  return (
    <>
      <div
        className={`top-0 fixed px-8 md:px-24 py-6 flex justify-between items-center w-full z-30
            ${isNavBarTransparent ? '' : 'bg-background'}`}
      >
        <motion.img
          src={isOnTheWritingPage ? MenuDrDBackground : MenuDrD}
          alt='Menu'
          animate={visibility === 'hidden' ? { x: 0 } : { x: -200 }}
          onClick={() => setVisibility('')}
          className='cursor-pointer'
        />
        <div className='text-center flex md:flex-row flex-col'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={'https://drive.google.com/file/d/1Pv0VmdBNN7fKeWLd9ao_0Au43CXVlp0v/view'}
            className={'hidden md:block text-xs border-2 px-4 py-1 md:mb-auto mb-2 md:mr-2' +
                ' shadow-lg bg-background border-dark-blue'}
          >
              Resume
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href={'mailto:alice.7414122013@gmail.com'}
            className={'hidden md:block text-xs border-2 px-4 py-1 shadow-lg bg-background border-dark-blue'}
          >
              Contact Me
          </a>
        </div>
      </div>
      <motion.div
        initial={false}
        transition={{ duration: 0.75 }}
        animate={visibility === 'hidden' ? 'closed' : 'open'}
        variants={variants}
        className={`md:w-full w-1/2 h-full md:h-auto flex flex-col md:flex-row z-30
            md:justify-between top-0 fixed bg-dark-blue py-6 px-5 md:px-24 shadow-2xl`}
      >
        <img
          src={MenuClose}
          className='w-5 mb-6 md:mb-0 cursor-pointer'
          alt='Close'
          onClick={() => setVisibility('hidden')}
        />
        {routes.map(route =>
          <CustomLink
            key={route.name}
            action={() => setVisibility('hidden')}
            label={route.name}
            route={route.route}
          />
        )}
      </motion.div>
    </>
  )
}
