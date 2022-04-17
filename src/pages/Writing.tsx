import React, { ReactElement } from 'react'
import WritingBg from '@images/WritingBg.png'

export default function Writing(): ReactElement {
  return (
    <div
      className='min-h-screen pt-4 flex flex-col items-center'
      style={{ backgroundImage: `url(${WritingBg})`,
        backgroundPositionX: '-20px',
        backgroundPositionY: '-350px',
      }}
    >
      <h1 className='mt-16 text-background'>Writing</h1>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://alisondrav.medium.com/'
        className='text-background text-2xl py-10 underline'
      >
          Medium Articles
      </a>
    </div>
  )
}
