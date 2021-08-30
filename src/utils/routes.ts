export enum Paths {
    MAIN = '/',
    ABOUT_ME = '/about-me',
    PROJECTS = '/projects',
    WRITING = '/writing'
}

export const routes = [
  {
    name: 'Main',
    route: Paths.MAIN,
  },
  {
    name: 'Who am I?',
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