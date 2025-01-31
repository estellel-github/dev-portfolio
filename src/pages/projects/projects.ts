import { getRepositoryDetails } from "../../utils";

export interface Project {
  name: string;
  repoLink: string;
  tags?: string[],
  description?: string;
  postLink?: string;
  repoLinkRel?: string;
  [key: string]: any;
}

export const projects: Project[] = [
  {
    name: 'Estelle L. - Dev Portfolio',
    description: 'An Astro dev portfolio and blog to post about my journey as a dev and my projects.',
    repoLink: 'https://github.com/estellel-github/dev-portfolio',
    tags: ['Blog', 'Astro']
  },
  {
    name: 'Movie Club App Backend',
    description: 'A backend app for managing a movie club (capstone full-stack project - in progress).',
    repoLink: 'https://github.com/estellel-github/movie-club-app',
    tags: ['TS', 'Node', 'Express', 'PSQL']
  },
  {
    name: 'Node-Express Book App',
    description: 'A basic RESTful API built with Node.js and Express.',
    repoLink: 'https://github.com/estellel-github/node-express-basic-app',
    repoLinkRel: 'nofollow noopener noreferrer',
    tags: ['Node', 'Express', 'JS']
  },
  {
    name: 'To Do App',
    description: 'A To Do app built with JavaScript/TypeScript and Webpack.',
    repoLink: 'https://github.com/estellel-github/todo-app-webpack',
    repoLinkRel: 'nofollow noopener noreferrer',
    tags: ['TS', 'Webpack']
  },
  {
    name: 'Calculator',
    description: 'A simple and elegant calculator app built using HTML, CSS, and JavaScript.',
    repoLink: 'https://github.com/estellel-github/calculator',
    repoLinkRel: 'nofollow noopener noreferrer',
    tags: ['JS']
  },
  {
    name: 'Etch-A-Sketch',
    description: 'A digital Etch-a-Sketch app built with HTML, CSS, and JavaScript.',
    repoLink: 'https://github.com/estellel-github/etch-a-sketch',
    tags: ['JS']
  }
]
