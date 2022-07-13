import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import LogicTasks from '@images/LogicTasks.jpg'
import { textVariants, imageVariants, navigateToLink } from '@/utils/projects'

export default function LogicTasksProject():ReactElement {
  return (
    <motion.div
      className='min-h-screen py-4 bg-background'
      initial='exit'
      animate='enter'
      exit='exit'
    >
      <h1 className='mt-16 text-center mb-12'>Logic Tasks</h1>
      <div className='mx-10 grid sm:grid-cols-4 grid-cols-1 gap-6 items-center text-center'>
        <motion.div variants={textVariants}>
          <h3 className='mb-2'>Tech Stack</h3>
          <ul className='text-left list-disc pl-10'>
            <li><b>C#</b></li>
          </ul>
          <p
            className='underline cursor-pointer'
            onClick={() => navigateToLink('https://github.com/alisondraV/logic-tasks')}
          >
            Github
          </p>
        </motion.div>
        <motion.img
          variants={imageVariants}
          src={LogicTasks}
          alt='LogicTasks'
          className='sm:col-span-2'
        />
        <motion.div variants={textVariants}>
          This project includes a set of various logic tasks a person can go through. It is used as a competition
          in a school in Dnipro, Ukraine. This is my graduation project, I worked on when I was completing a high school.
        </motion.div>
      </div>
    </motion.div>
  )
}
