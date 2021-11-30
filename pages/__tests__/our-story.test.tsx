import { screen } from '@testing-library/react'
import OurStory from 'pages/our-story'
import { Elements } from 'prismic-reactjs'
import React from 'react'
import { pageRoutes, renderWithTheme } from 'test-util'

const mockProps = {
  page: {
    seo: {
      title: 'Unleashed Potential Our Story',
      metaDescription: 'Unleashed Potential Our Story meta description',
    },
    title: 'Our Story',
    pageContent: [
      {
        type: Elements.paragraph,
        text: 'Our story begins with an idea',
        spans: [],
      },
    ],
  },
  featuredReview: {
    quote: [
      {
        type: Elements.paragraph,
        text: 'Review Quote From Our Story',
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

describe('OurStory', () => {
  it('renders the page title', () => {
    pageRoutes('/our-story')

    renderWithTheme(<OurStory {...mockProps} />)
    expect(screen.queryByText('Our Story')).toBeInTheDocument()
  })

  it('renders the page content', () => {
    pageRoutes('/our-story')

    renderWithTheme(<OurStory {...mockProps} />)
    expect(screen.queryByText('Our story begins with an idea')).toBeInTheDocument()
  })

  it('renders the featured quote', () => {
    pageRoutes('/our-story')

    renderWithTheme(<OurStory {...mockProps} />)
    expect(screen.queryByText('Review Quote From Our Story')).toBeInTheDocument()
  })

  it('renders OurStory page snapshot', () => {
    pageRoutes('/our-story')

    renderWithTheme(<OurStory {...mockProps} />)
    expect(screen).toMatchSnapshot()
  })
})
