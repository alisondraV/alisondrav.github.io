import React, { ReactElement } from 'react'
import WritingBg from '@images/WritingBg.png'

export default function Writing(): ReactElement {
  return (
    <div
      className='h-screen pt-4 flex flex-col items-center'
      style={{ backgroundImage: `url(${WritingBg})`,
        backgroundPositionX: '-20px',
        backgroundPositionY: '-350px',
      }}
    >
      <h1 className='mt-16 font-header text-background text-xl md:text-3xl'>Writing</h1>
    </div>
  )
}
