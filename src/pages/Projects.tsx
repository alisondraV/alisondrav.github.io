import React, { ReactElement } from 'react'
import ClickableProject from '@/components/ClickableProject'
import { projects } from '@/utils/Projects'

export default function Projects():ReactElement {
  return (
    <div className='h-screen min-h-full py-4 bg-background'>
      <h1 className='mt-16 text-center mb-12'>Projects</h1>
      <div className='flex justify-evenly mx-4'>
        {projects.map(project =>
          <ClickableProject
            key={project.header}
            header={project.header}
            image={project.image}
            handleClick={project.onClick}
          />
        )}
      </div>
    </div>
  )
}
