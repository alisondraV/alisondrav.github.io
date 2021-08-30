import { BrowserRouter, Route } from 'react-router-dom'
import React, { ReactElement, useState } from 'react'
import AboutMe from '@/pages/AboutMe'
import Writing from '@/pages/Writing'
import { CustomLink } from '@/components'
import Main from '@/pages/Main'
import MenuClose from '@images/MenuClose.svg'
import MenuDrD from '@images/MenuDrD.svg'
import Projects from '@/pages/Projects'
import { motion } from 'framer-motion'
import { Paths, routes } from '@/utils/routes'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

export default function NavigationMenu(): ReactElement {
  const [visibility, setVisibility] = useState('hidden')

  const isNavBarTransparent = () => location.pathname === Paths.MAIN || location.pathname === Paths.WRITING

  return (
    <BrowserRouter>
      <div
        className={`top-0 fixed px-8 md:px-24 py-6 flex justify-between items-center w-full z-30
            ${isNavBarTransparent() ? '' : 'bg-background'}`}
      >
        <motion.img
          src={MenuDrD}
          alt="Menu"
          animate={visibility === 'hidden' ? { x: 0 } : { x: -200 }}
          onClick={() => setVisibility('')}
          className="cursor-pointer"
        />
        <div className='text-center flex md:flex-row flex-col'>
          <a
            href={'https://drive.google.com/file/d/17hCxlDL-dl-aNSIr_fdxHBkxqCHnQ6jb/view?usp=sharing'}
            className='hidden md:block text-xs border-2 px-4 py-1 border-dark-blue
             md:mb-auto mb-2 md:mr-2 bg-background shadow-lg'
          >Resume</a>
          <a
            href={'mailto:alice.7414122013@gmail.com'}
            className='hidden md:block text-xs border-2 px-4 py-1 bg-background shadow-lg border-dark-blue'
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
        className='md:w-full w-1/2 h-full md:h-auto flex flex-col md:flex-row z-30
         md:justify-between top-0 fixed bg-dark-blue py-6 px-5 md:px-24 shadow-2xl'
      >
        <img
          src={MenuClose}
          className="w-5 mb-6 md:mb-0 cursor-pointer"
          alt="Close"
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

      <Route exact path={Paths.MAIN} component={Main} />
      <Route exact path={Paths.ABOUT_ME} component={AboutMe} />
      <Route exact path={Paths.PROJECTS} component={Projects} />
      <Route exact path={Paths.WRITING} component={Writing} />
    </BrowserRouter>
  )
}
