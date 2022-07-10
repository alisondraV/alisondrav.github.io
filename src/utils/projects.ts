import LogicTasks from '@images/LogicTasks.svg'
import Foodizzy from '@images/Foodizzy.svg'
import SpookyMaze from '@images/SpookyMaze.svg'
import Emojillite from '@images/Emojillite.svg'
import Acacio from '@images/Acacio.svg'
import { ProjectProps } from '@/interfaces'
import { Paths } from '@/utils/routes'

const navigateToGHPage = (url: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.open(url, '_blank').focus()
}

export const projects: ProjectProps[] = [
  {
    header: 'LogicTasks',
    image: LogicTasks,
    linkToPage: Paths.PROJECT_VIEW
  },
  {
    header: 'Foodizzy',
    image: Foodizzy,
    linkToPage: Paths.PROJECT_VIEW
  },
  {
    header: 'SpookyMaze',
    image: SpookyMaze,
    linkToPage: Paths.PROJECT_VIEW
  },
  {
    header: 'Emojillite',
    image: Emojillite,
    linkToPage: Paths.PROJECT_VIEW
  },
  {
    header: 'Acacio',
    image: Acacio,
    linkToPage: Paths.PROJECT_VIEW
  },
]