export const SITE_NAVS = [
  {
    id: 1,
    slug: '/',
    label: 'Home',
  },
  {
    id: 2,
    slug: '/services',
    label: 'Services',
  },
  {
    id: 3,
    slug: null,
    label: 'Coaches',
    children: [
      {
        id: 1,
        slug: '/coach/jessica-rebelo',
        label: 'Jessica Rebelo'
      },
      {
        id: 2,
        slug: '/coach/ron-lombardi',
        label: 'Ron Lombardi'
      },
      {
        id: 3,
        slug: '/coach/che-greeff',
        label: 'Ché Greeff'
      }
    ]
  },
  {
    id: 4,
    slug: '/our-story',
    label: 'Our Story',
  },
  {
    id: 5,
    slug: '/reviews',
    label: 'Reviews',
  }
]