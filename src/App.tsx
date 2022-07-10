import React, { ReactElement } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import NavigationMenu from '@/components/NavigationMenu'
import Footer from './components/Footer'
import { Paths } from '@/utils/routes'
import Main from '@/pages/Main'
import AboutMe from '@/pages/AboutMe'
import Projects from '@/pages/Projects'
import Writing from '@/pages/Writing'
import { AnimatePresence } from 'framer-motion'
import AcacioProject from '@/pages/projects/AcacioProject'

export default function App(): ReactElement {
  return (
    <HashRouter>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path={Paths.MAIN} component={Main} />
              <Route exact path={Paths.ABOUT_ME} component={AboutMe} />
              <Route exact path={Paths.PROJECTS} component={Projects} />
              <Route exact path={Paths.WRITING} component={Writing} />
              <Route exact path={Paths.ACACIO_PROJECT} component={AcacioProject} />
            </Switch>
          </AnimatePresence>
        )}
      />
      <NavigationMenu />
      <Footer />
    </HashRouter>
  )
}
