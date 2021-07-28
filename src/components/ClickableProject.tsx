import React, { ReactElement } from 'react'
import { ClickableProjectProps } from '@/interfaces'

export default function ClickableProject({ header, image }: ClickableProjectProps):ReactElement {
  return (
    <div className="p-3 flex flex-col items-center ">
      <img src={image} alt='project' className='h-72 md:h-96 rounded-xl mb-2' />
      <h2 className="text-l md:text-xl">{header}</h2>
    </div>
  )
}
