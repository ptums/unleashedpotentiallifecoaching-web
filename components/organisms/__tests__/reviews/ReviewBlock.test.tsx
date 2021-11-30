import { screen } from '@testing-library/react'
import ReviewBlock from 'components/organisms/reviews/ReviewBlock'
import { Elements } from 'prismic-reactjs'
import React from 'react'
import { renderWithTheme } from 'test-util'

const mockProps = {
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
}

describe('<ReviewBlock />', () => {
  it('renders quote property', () => {
    renderWithTheme(<ReviewBlock {...mockProps} />)

    expect(screen.queryByText('Review Quote')).toBeInTheDocument()
  })

  it('renders name property', () => {
    renderWithTheme(<ReviewBlock {...mockProps} />)

    expect(screen.queryByText('Review Name')).toBeInTheDocument()
  })
})
