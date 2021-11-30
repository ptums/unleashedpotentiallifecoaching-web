import { screen } from '@testing-library/react'
import Services from 'pages/services'
import { Elements } from 'prismic-reactjs'
import React from 'react'
import { pageRoutes, renderWithTheme } from 'test-util'

const mockProps = {
  service: {
    seo: {
      title: 'Unleashed Potential Services',
      metaDescription: 'Unleashed Potential Services meta description',
    },
    page_blocks: [
      {
        content: [
          {
            type: Elements.paragraph,
            text: 'The first service description',
            spans: [],
          },
        ],
        title: [
          {
            type: Elements.heading1,
            text: 'The first service title',
            spans: [],
          },
        ],
      },
    ],
  },
  coaches: [
    {
      image: {
        src: 'https://images.prismic.io/unleashedpotentiallifecoaching-web/064812f4-447a-46e0-88ca-8a10065b41a2_Jessica-Rebelo.webp?auto=compress,format',
        width: 300,
        height: 300,
        alt: 'Ron',
      },
      name: 'Ron',
    },
  ],
  featuredReview: {
    quote: [
      {
        type: Elements.paragraph,
        text: 'Review Quote From Services',
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

describe('Services', () => {
  it('renders the page block description', () => {
    pageRoutes('/services')

    renderWithTheme(<Services {...mockProps} />)
    expect(screen.queryByText('The first service description')).toBeInTheDocument()
  })

  it('renders the coaches 1 hour text', () => {
    pageRoutes('/')

    renderWithTheme(<Services {...mockProps} />)
    expect(screen.queryByText('1 hour')).toBeInTheDocument()
  })

  it('renders the featured quote', () => {
    pageRoutes('/services')

    renderWithTheme(<Services {...mockProps} />)
    expect(screen.queryByText('Review Quote From Services')).toBeInTheDocument()
  })

  it('renders Services page snapshot', () => {
    pageRoutes('/services')

    renderWithTheme(<Services {...mockProps} />)
    expect(screen).toMatchSnapshot()
  })
})
