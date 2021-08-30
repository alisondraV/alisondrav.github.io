import React, { ReactElement } from 'react'
import Blur from '@images/Blur.svg'

export default function Writing(): ReactElement {
  return (
    <div
      className="h-screen pt-4 flex flex-col items-center"
      style={{ backgroundImage: `url(${Blur})`,
        backgroundPositionX: '-30px',
        backgroundPositionY: '-300px',
      }}
    >
      <h1 className="mt-16 font-header text-black text-xl md:text-3xl">Writing</h1>
    </div>
  )
}
