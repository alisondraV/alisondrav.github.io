export enum Paths {
    MAIN = '/',
    ABOUT_ME = '/about-me',
    PROJECTS = '/projects',
    WRITING = '/writing',
    ACACIO_PROJECT = '/acacio',
    EMOJILLITE_PROJECT = '/emojillite',
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