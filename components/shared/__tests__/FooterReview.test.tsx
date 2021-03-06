import { screen } from '@testing-library/react'
import FooterReview from 'components/shared/FooterReview'
import { Elements } from 'prismic-reactjs'
import React from 'react'
import { pageRoutes, renderWithTheme } from 'test-util'

const mockProps = {
  quote: [
    {
      type: Elements.paragraph,
      text: "You can't appreciate the light without appreciating the darkness.",
      spans: [],
    },
  ],
  name: [
    {
      type: Elements.paragraph,
      text: 'Jess',
      spans: [],
    },
  ],
}
describe('<FooterReview />', () => {
  it('renders the name', () => {
    pageRoutes('/services')
    renderWithTheme(<FooterReview {...mockProps} />)

    expect(
      screen.queryByText("You can't appreciate the light without appreciating the darkness.")
    ).toBeInTheDocument()
  })

  it('renders the quote', () => {
    pageRoutes('/services')
    renderWithTheme(<FooterReview {...mockProps} />)

    expect(screen.queryByText('Jess')).toBeInTheDocument()
  })
})
