import { motion } from 'framer-motion'
import React, { ReactElement } from 'react'
import SpookyMaze from '@assets/videos/SpookyMaze.gif'
import { textVariants, imageVariants, navigateToLink } from '@/utils/projects'

export default function SpookyMazeProject():ReactElement {
  return (
    <motion.div
      className='min-h-screen py-4 bg-background'
      initial='exit'
      animate='enter'
      exit='exit'
    >
      <h1 className='mt-16 text-center mb-12'>SpookyMaze</h1>
      <div className='mx-20 grid sm:grid-cols-3 grid-cols-1 gap-6 items-center text-center'>
        <motion.div variants={textVariants}>
          <h3 className='mb-2'>Tech Stack</h3>
          <ul className='text-left list-disc pl-20'>
            <li><b>Unity</b></li>
            <li><b>C#</b></li>
          </ul>
          <p
            className='underline cursor-pointer'
            onClick={() => navigateToLink('https://github.com/MapleMana/SpookyMaze')}
          >
            Github
          </p>
          <p
            className='underline cursor-pointer'
            onClick={() => navigateToLink('https://apps.apple.com/us/app/spooky-maze/id1535892323')}
          >
            App Store
          </p>
          <p
            className='underline cursor-pointer'
            onClick={() => navigateToLink('https://play.google.com/store/apps/details?id=com.MapleMana.SpookyMaze&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1')}
          >
            Google Play
          </p>
        </motion.div>
        <div className='flex justify-center'>
          <motion.img
            variants={imageVariants}
            src={SpookyMaze}
            alt='SpookyMaze'
            className='h-96'
          />
        </div>
        <motion.div variants={textVariants}>
          SpookyMaze is a fun escape game with tons of different mazes! My friend and I built the game
          mechanics (core functionality) of this game for <a href='https://maplemana.com/' className='underline'
            target='_blank' rel='noopener noreferrer'>MapleMana</a> - a game studio.
          It was an amazing learning experience, and working on the creation of random mazes was extremely interesting.
        </motion.div>
      </div>
    </motion.div>
  )
}
