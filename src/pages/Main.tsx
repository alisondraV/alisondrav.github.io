import React, { ReactElement } from 'react'
import Alisa from '@assets/Alisa.svg'
import HiddenImage from '@/components/HiddenImage'
import Surprise from '@/components/Surprise'
import Ukraine from '@assets/Ukraine.svg'

export default function Main(): ReactElement {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-background">
      <h1 className="font-header w-3/4 md:w-1/2 text-center text-xl md:text-2xl leading-normal">
        Hi there! My name is <HiddenImage image={Alisa} text='Alisa Vynohradova' />,
        I live and work in Canada, but was born in <HiddenImage image={Ukraine} text='Ukraine' /> I
        have a lot of energy and positivity that I am willing to share with people.
      </h1>
      <Surprise />
    </div>
  )
}
