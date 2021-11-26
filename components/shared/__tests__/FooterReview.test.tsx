import { screen } from '@testing-library/react'
import FooterReview from 'components/shared/FooterReview'
import { renderWithTheme } from 'components/test-util'
import { Elements } from 'prismic-reactjs'
import React from 'react'

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
    renderWithTheme(<FooterReview {...mockProps} />)

    expect(
      screen.queryByText("You can't appreciate the light without appreciating the darkness.")
    ).toBeInTheDocument()
  })

  it('renders the quote', () => {
    renderWithTheme(<FooterReview {...mockProps} />)

    expect(screen.queryByText('Jess')).toBeInTheDocument()
  })
})
