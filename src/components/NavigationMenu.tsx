import { BrowserRouter, Link, Route } from 'react-router-dom'
import React, { ReactElement, useState } from 'react'
import AboutMe from '@/pages/AboutMe'
import Articles from '@/pages/Articles'
import ContactMe from '@/pages/ContactMe'
import Main from '@/pages/Main'
import MenuClose from '@assets/MenuClose.svg'
import MenuDrD from '@assets/MenuDrD.svg'
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
      <img
        src={MenuDrD} alt="Close"
        className="top-0 fixed pl-8 md:pl-24 pt-7"
        onClick={() => setVisibility('')}
      />
      <motion.div
        animate={visibility === 'hidden' ? 'closed' : 'open'}
        variants={variants}
        className='w-full flex justify-between top-0 fixed bg-dark-blue py-6 px-5 md:px-24 text-background'
      >
        <img src={MenuClose} alt="Close" onClick={() => setVisibility('hidden')} />
        <Link to="/" className="font-header text-xl" onClick={() => setVisibility('hidden')}>
            Main
        </Link>
        <Link to="/about-me" className="font-header text-xl" onClick={() => setVisibility('hidden')}>
            Who am I?
        </Link>
        <Link to="/projects" className="font-header text-xl" onClick={() => setVisibility('hidden')}>
            Projects
        </Link>
        <Link to="/articles" className="font-header text-xl" onClick={() => setVisibility('hidden')}>
            Articles
        </Link>
        <Link to="/contact-me" className="font-header text-xl" onClick={() => setVisibility('hidden')}>
            Contact Me
        </Link>
      </motion.div>

      <Route exact path="/" component={Main} />
      <Route exact path="/about-me" component={AboutMe} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/articles" component={Articles} />
      <Route exact path="/contact-me" component={ContactMe} />
    </BrowserRouter>
  )
}
