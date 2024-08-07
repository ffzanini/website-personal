export interface Project {
  id: number
  navigation: string
  image: string
  technologies: string[]
  type: string
  active: boolean
  link: string
  github: string
}

export const projects: Project[] = [
  {
    id: 1,
    navigation: 'portifolio',
    image: '/images/projects/study/ffzanini_site.png',
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'CSS',
      'Tailwind',
      'Vercel',
    ],
    type: 'Study',
    active: true,
    link: 'https://ffzanini.dev/',
    github: 'https://github.com/ffzanini/website-personal',
  },
  {
    id: 5,
    navigation: 'iguatemi',
    image: '/images/projects/professional/project_iguatemi.png',
    technologies: [
      'JavaScript',
      'TypeScript',
      'React',
      'Vite',
      'CSS',
      'Material UI',
      'Java',
      'MuleSoft',
      'Sensedia',
      'Microsoft Azure',
      'MongoDB',
      'SalesForce',
      'SAP',
    ],
    type: 'Professional',
    active: true,
    link: 'https://www.iguatemi.com.br/',
    github: '',
  },
  {
    id: 3,
    navigation: 'doveresearch',
    image: '/images/projects/professional/project_doveresearch.png',
    technologies: [
      'JavaScript',
      'PHP',
      'CodeIgniter',
      'MySQL',
      'CSS',
      'Bootstrap',
      'Hostgator',
    ],
    type: 'Professional',
    active: true,
    link: 'https://doveresearch.org/',
    github: '',
  },
  {
    id: 4,
    navigation: 'educacross',
    image: '/images/projects/professional/project_educacross.png',
    technologies: [
      'JavaScript',
      'TypeScript',
      'Angular',
      'Vue',
      'CSS',
      'SCSS',
      'Tailwind',
    ],
    type: 'Professional',
    active: true,
    link: 'https://www.educacross.com.br/',
    github: '',
  },
  {
    id: 2,
    navigation: 'conexia',
    image: '/images/projects/professional/project_conexia.png',
    technologies: ['JavaScript', 'TypeScript', 'React', 'CSS', 'Material UI'],
    type: 'Professional',
    active: true,
    link: 'https://www.conexia.com.br/',
    github: '',
  },
  {
    id: 6,
    navigation: 'ufcfantasy',
    image: '/images/projects/professional/project_ufcfantasy.png',
    technologies: ['JavaScript', 'React', 'Next.js', 'CSS', 'Material UI'],
    type: 'Professional',
    active: true,
    link: 'https://www.ufcfantasy.com.br/',
    github: '',
  },

  {
    id: 7,
    navigation: 'vittude',
    image: '/images/projects/professional/project_vittude.png',
    technologies: ['JavaScript', 'React', 'CSS', 'SASS', 'Material UI'],
    type: 'Professional',
    active: true,
    link: 'https://www.vittude.com/',
    github: '',
  },
]
