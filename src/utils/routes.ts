export enum Paths {
    MAIN = '/',
    ABOUT_ME = '/about-me',
    PROJECTS = '/projects',
    WRITING = '/writing',
    FOODIZZY_PROJECT = '/foodizzy',
    SPOOKY_MAZE_PROJECT = '/spooky-maze',
    EMOJILLITE_PROJECT = '/emojillite',
    ACACIO_PROJECT = '/acacio',
}

export const routes = [
  {
    name: 'Main',
    route: Paths.MAIN,
  },
  {
    name: 'About Me',
    route: Paths.ABOUT_ME,
  },
  {
    name: 'Projects',
    route: Paths.PROJECTS,
  },
  {
    name: 'Writing',
    route: Paths.WRITING,
  },
]