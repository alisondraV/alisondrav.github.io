import './App.css'
import React, { ReactElement } from 'react'
import NavigationMenu from '@/components/NavigationMenu'
import Footer from './components/Footer'

export default function App(): ReactElement {
  return (
    <>
      <NavigationMenu />
      <Footer />
    </>
  )
}
