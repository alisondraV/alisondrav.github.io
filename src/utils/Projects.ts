import LogicTasks from '@images/LogicTasks.svg'
import Foodizzy from '@images/Foodizzy.svg'
import SpookyMaze from '@images/SpookyMaze.svg'
import Emojillite from '@images/Emojillite.svg'
import RapunzelPlay from '@images/Rapunzel.svg'

interface ProjectProps {
    header: string
    image: string
    onClick: () => void
}

const navigateToGHPage = (url: string) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  window.open(url, '_blank').focus()
}

export const projects: ProjectProps[] = [
  {
    header: 'LogicTasks',
    image: LogicTasks,
    onClick: () => navigateToGHPage('https://github.com/alisondraV/logic-tasks')
  },
  {
    header: 'Foodizzy',
    image: Foodizzy,
    onClick: () => navigateToGHPage('https://github.com/alisondraV/foodizzy')
  },
  {
    header: 'SpookyMaze',
    image: SpookyMaze,
    onClick: () => navigateToGHPage('https://github.com/MapleMana/SpookyMaze')
  },
  {
    header: 'Emojillite',
    image: Emojillite,
    onClick: () => navigateToGHPage('https://github.com/ANDREYDEN/space-apps-2019')
  },
  {
    header: 'Rapunzel',
    image: RapunzelPlay,
    onClick: () => navigateToGHPage('https://github.com/alisondraV/Rapunzel-Monogame')
  },
]