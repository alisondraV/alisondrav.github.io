import LogicTasks from '@images/LogicTasks.svg'
import Foodizzy from '@images/Foodizzy.svg'
import SpookyMaze from '@images/SpookyMaze.svg'
import Emojillite from '@images/Emojillite.svg'
import Acacio from '@images/Acacio.svg'
import { ProjectProps } from '@/interfaces'
import { Paths } from '@/utils/routes'

export const navigateToLink = (url: string): void => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.open(url, '_blank').focus()
}

export const projects: ProjectProps[] = [
  {
    header: 'Logic Tasks',
    image: LogicTasks,
    linkToPage: Paths.LOGIC_TASKS_PROJECT
  },
  {
    header: 'Foodizzy',
    image: Foodizzy,
    linkToPage: Paths.FOODIZZY_PROJECT
  },
  {
    header: 'SpookyMaze',
    image: SpookyMaze,
    linkToPage: Paths.SPOOKY_MAZE_PROJECT
  },
  {
    header: 'Emojillite',
    image: Emojillite,
    linkToPage: Paths.EMOJILLITE_PROJECT
  },
  {
    header: 'Acacio',
    image: Acacio,
    linkToPage: Paths.ACACIO_PROJECT
  },
]

const transition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96]
}

export const imageVariants = {
  exit: { y: '50%', opacity: 0, transition },
  enter: {
    y: '0%',
    opacity: 1,
    transition
  }
}

export const textVariants = {
  exit: { y: 100, opacity: 0, transition },
  enter: { y: 0, opacity: 1, transition: { delay: 0.5, ...transition } }
}