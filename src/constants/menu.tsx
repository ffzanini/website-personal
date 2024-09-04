type MenuItem = {
  name: string
  href: string
  subItems?: MenuItem[]
}

export const menu: MenuItem[] = [
  {
    name: 'about',
    href: '/about',
    subItems: [
      {
        name: 'presentation',
        href: '/about/presentation',
      },
      {
        name: 'testimonials',
        href: '/about/testimonials',
      },
      {
        name: 'stack',
        href: '/about/stack',
      },
    ],
  },
  {
    name: 'projects',
    href: '/projects',
  },
  {
    name: 'contact',
    href: '/contact',
  },
  {
    name: 'resume',
    href: '/resume',
  },
]
