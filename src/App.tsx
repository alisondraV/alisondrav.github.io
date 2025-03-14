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
import EmojilliteProject from '@/pages/projects/EmojilliteProject'
import FoodizzyProject from '@/pages/projects/FoodizzyProject'
import SpookyMazeProject from '@/pages/projects/SpookyMazeProject'
import LogicTasksProject from '@/pages/projects/LogicTasksProject'

export default function App(): ReactElement {
  return (
    <HashRouter>
      <Route
        render={({ location }) => (
          <AnimatePresence initial={false}>
            <Switch location={location} key={location.pathname}>
              <Route exact path={Paths.MAIN} component={Main} />
              <Route exact path={Paths.ABOUT_ME} component={AboutMe} />
              <Route exact path={Paths.PROJECTS} component={Projects} />
              <Route exact path={Paths.WRITING} component={Writing} />
              <Route exact path={Paths.LOGIC_TASKS_PROJECT} component={LogicTasksProject} />
              <Route exact path={Paths.FOODIZZY_PROJECT} component={FoodizzyProject} />
              <Route exact path={Paths.SPOOKY_MAZE_PROJECT} component={SpookyMazeProject} />
              <Route exact path={Paths.EMOJILLITE_PROJECT} component={EmojilliteProject} />
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
