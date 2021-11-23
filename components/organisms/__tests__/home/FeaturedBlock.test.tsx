import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import FeaturedBlock from '../../home/FeaturedBlock'

const mockProps = {
  imageUrl: "https://images.prismic.io/unleashedpotentiallifeco…UnleashedPotential-Logo.webp?auto=compress,format",
  header: "You can't appreciate the light without appreciating the darkness.",
  body: [
    {
      text: "We help you uncover your purpose by identifying negative behaviors and thought patterns that get in the way of achieving your goals."
    },
    {
      text: "We specialize in a plan-driven lifestyle, obtainable for anyone willing to unleash their full potential! "
    }
  ]
};

describe('<FeaturedBlock />', () => {
  it('renders image', () => {
    renderWithTheme(<FeaturedBlock {...mockProps} />)

    expect(screen.queryByAltText('Unleashed Potential')).toBeInTheDocument()
  })

  it('renders header title', () => {
    renderWithTheme(<FeaturedBlock {...mockProps} />)

    expect(screen.queryByText("You can't appreciate the light without appreciating the darkness.")).toBeInTheDocument()
  })

  it('renders body ', () => {
    renderWithTheme(<FeaturedBlock {...mockProps} />)

    expect(screen.queryByText("We specialize in a plan-driven lifestyle, obtainable for anyone willing to unleash their full potential!")).toBeInTheDocument()
  })
})