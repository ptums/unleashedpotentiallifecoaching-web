import { screen } from '@testing-library/react'
import Home from 'pages/index'
import { Elements } from 'prismic-reactjs'
import React from 'react'
import { pageRoutes, renderWithTheme } from 'test-util'

const dummieImg =
  'https://images.prismic.io/unleashedpotentiallifecoaching-web/064812f4-447a-46e0-88ca-8a10065b41a2_Jessica-Rebelo.webp?auto=compress,format'

const mockProps = {
  seo: {
    title: 'Unleashed Potential',
    metaDescription: 'Unleashed Potential meta description',
  },
  banner: {
    imageUrl: dummieImg,
    lineOne: 'Main Line One',
    lineTwo: 'Main Line Two',
  },
  featuredContent: {
    imageUrl: dummieImg,
    header: [
      {
        type: Elements.heading2,
        text: 'Featured header text',
        spans: [],
      },
    ],
    body: [
      {
        type: Elements.paragraph,
        text: 'Featured body text',
        spans: [],
      },
    ],
  },
  blockWidgets: [
    {
      id: 1,
      description: 'Block description',
      title: [
        {
          type: Elements.paragraph,
          text: 'Block title',
          spans: [],
        },
      ],
      imageUrl: dummieImg,
    },
  ],
  coaches: [
    {
      id: 1,
      seo: {
        title: '...',
        metaDescription: '...',
      },
      name: 'Jessica Rebelo',
      image: {
        src: dummieImg,
        width: 300,
        height: 300,
        alt: 'Jess',
      },
    },
  ],
  featuredReview: {
    quote: [
      {
        type: Elements.paragraph,
        text: 'Review Quote',
        spans: [],
      },
    ],
    name: [
      {
        type: Elements.paragraph,
        text: 'Review Name',
        spans: [],
      },
    ],
  },
}
describe('Home', () => {
  it('renders the banner line one', () => {
    pageRoutes('/')

    renderWithTheme(<Home {...mockProps} />)
    expect(screen.queryByText('Main Line One')).toBeInTheDocument()
  })

  it('renders the featured content header', () => {
    pageRoutes('/')

    renderWithTheme(<Home {...mockProps} />)
    expect(screen.queryByText('Featured header text')).toBeInTheDocument()
  })

  it('renders the block widget description', () => {
    pageRoutes('/')

    renderWithTheme(<Home {...mockProps} />)
    expect(screen.queryByText('Block description')).toBeInTheDocument()
  })

  it('renders the coaches name', () => {
    pageRoutes('/')

    renderWithTheme(<Home {...mockProps} />)
    expect(screen.queryByText('Jessica Rebelo')).toBeInTheDocument()
  })

  it('renders the featured quote', () => {
    pageRoutes('/')

    renderWithTheme(<Home {...mockProps} />)
    expect(screen.queryByText('Review Quote')).toBeInTheDocument()
  })

  it('renders Home page snapshot', () => {
    pageRoutes('/')

    renderWithTheme(<Home {...mockProps} />)
    expect(screen).toMatchSnapshot()
  })
})
