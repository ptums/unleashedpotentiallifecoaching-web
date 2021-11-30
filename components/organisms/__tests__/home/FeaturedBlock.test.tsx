import { screen } from '@testing-library/react'
import FeaturedBlock from 'components/organisms/home/FeaturedBlock'
import { Elements } from 'prismic-reactjs'
import React from 'react'
import { renderWithTheme } from 'test-util'

const header = [
  {
    type: Elements.heading2,
    text: "You can't appreciate the light without appreciating the darkness.",
    spans: [],
  },
]

const body = [
  {
    type: Elements.paragraph,
    text: 'We help you uncover your purpose by identifying negative behaviors and thought patterns that get in the way of achieving your goals.',
    spans: [],
  },
  {
    type: Elements.paragraph,
    text: 'We specialize in a plan-driven lifestyle, obtainable for anyone willing to unleash their full potential! ',
    spans: [],
  },
]

const mockProps = {
  imageUrl:
    'https://images.prismic.io/unleashedpotentiallifeco…UnleashedPotential-Logo.webp?auto=compress,format',
  header,
  body,
}

describe('<FeaturedBlock />', () => {
  it('renders image', () => {
    renderWithTheme(<FeaturedBlock {...mockProps} />)

    expect(screen.queryByAltText('Unleashed Potential')).toBeInTheDocument()
  })

  it('renders header title', () => {
    renderWithTheme(<FeaturedBlock {...mockProps} />)

    expect(
      screen.queryByText("You can't appreciate the light without appreciating the darkness.")
    ).toBeInTheDocument()
  })

  it('renders body ', () => {
    renderWithTheme(<FeaturedBlock {...mockProps} />)

    expect(
      screen.queryByText(
        'We specialize in a plan-driven lifestyle, obtainable for anyone willing to unleash their full potential!'
      )
    ).toBeInTheDocument()
  })
})
