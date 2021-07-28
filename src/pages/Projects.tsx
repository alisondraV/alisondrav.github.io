import React, { ReactElement } from 'react'
import ClickableProject from '@/components/ClickableProject'
import LogicTasks from '@images/LogicTasks.svg'
import Foodizzy from '@images/Foodizzy.svg'
import SpookyMaze from '@images/SpookyMaze.svg'
import Emojillite from '@images/Emojillite.svg'
import RapunzelPlay from '@images/Rapunzel.svg'

export default function Projects():ReactElement {
  return (
    <div className="h-screen min-h-full py-4 bg-background">
      <h1 className="mt-16 font-header text-center text-xl md:text-3xl mb-6">Projects</h1>
      <div className='flex justify-evenly mx-4'>
        <ClickableProject header="LogicTasks" image={LogicTasks} />
        <ClickableProject header="Foodizzy" image={Foodizzy} />
        <ClickableProject header="SpookyMaze" image={SpookyMaze} />
        <ClickableProject header="Emojillite" image={Emojillite} />
        <ClickableProject header="Rapunzel" image={RapunzelPlay} />
      </div>
    </div>
  )
}
