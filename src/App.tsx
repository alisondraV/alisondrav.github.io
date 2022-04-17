import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavigationMenu from '@/components/NavigationMenu'
import Footer from './components/Footer'
import { Paths } from '@/utils/routes'
import Main from '@/pages/Main'
import AboutMe from '@/pages/AboutMe'
import Projects from '@/pages/Projects'
import Writing from '@/pages/Writing'

export default function App(): ReactElement {
  return (
    <>
      <Switch>
        <Route exact path={Paths.MAIN} component={Main} />
        <Route exact path={Paths.ABOUT_ME} component={AboutMe} />
        <Route exact path={Paths.PROJECTS} component={Projects} />
        <Route exact path={Paths.WRITING} component={Writing} />
      </Switch>
      <NavigationMenu />
      <Footer />
    </>
  )
}
