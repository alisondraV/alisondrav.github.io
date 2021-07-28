import { BrowserRouter, Route } from 'react-router-dom'
import React, { ReactElement, useState } from 'react'
import AboutMe from '@/pages/AboutMe'
import Articles from '@/pages/Articles'
import ContactMe from '@/pages/ContactMe'
import { CustomLink } from '@/components'
import Main from '@/pages/Main'
import MenuClose from '@images/MenuClose.svg'
import MenuDrD from '@images/MenuDrD.svg'
import Projects from '@/pages/Projects'
import { motion } from 'framer-motion'

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

export default function NavigationMenu(): ReactElement {
  const [visibility, setVisibility] = useState('hidden')

  return (
    <BrowserRouter>
      <motion.img src={MenuDrD} alt="Menu"
        animate={visibility === 'hidden' ? { x: 0 } : { x: -200 }}
        className="top-0 fixed pl-8 md:pl-24 pt-7"
        onClick={() => setVisibility('')}
      />
      <motion.div
        initial={false}
        transition={{ duration: 0.75 }}
        animate={visibility === 'hidden' ? 'closed' : 'open'}
        variants={variants}
        className='md:w-full w-1/2 h-full md:h-auto flex flex-col md:flex-row
         md:justify-between top-0 fixed bg-dark-blue py-6 px-5 md:px-24 shadow-2xl'
      >
        <img
          src={MenuClose}
          className="w-5 mb-6 md:mb-0 cursor-pointer"
          alt="Close"
          onClick={() => setVisibility('hidden')}
        />
        <CustomLink action={() => setVisibility('hidden')} label='Main' route='/' />
        <CustomLink action={() => setVisibility('hidden')} label='Who am I?' route='/about-me' />
        <CustomLink action={() => setVisibility('hidden')} label='Projects' route='/projects' />
        <CustomLink action={() => setVisibility('hidden')} label='Articles' route='/articles' />
        <CustomLink action={() => setVisibility('hidden')} label='Contact Me' route='/contact-me' />
      </motion.div>

      <Route exact path="/" component={Main} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/contact-me" component={ContactMe} />
    </BrowserRouter>
  )
}
