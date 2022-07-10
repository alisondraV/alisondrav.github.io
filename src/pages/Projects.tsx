import React, { ReactElement } from 'react'
import ClickableProject from '@/components/ClickableProject'
import { projects } from '@/utils/projects'
import { motion } from 'framer-motion'

const projectsVariants = {
  enter: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1 } }
}

export default function Projects():ReactElement {
  return (
    <div className='min-h-screen py-4 bg-background'>
      <h1 className='mt-16 text-center mb-12'>Projects</h1>
      <motion.div
        className='flex justify-evenly flex-wrap mx-4 gap-4'
        initial='initial'
        animate='enter'
        exit='exit'
        variants={projectsVariants}
      >
        {projects.map(project =>
          <ClickableProject
            key={project.header}
            header={project.header}
            image={project.image}
            linkToPage={project.linkToPage}
          />
        )}
      </motion.div>
    </div>
  )
}
