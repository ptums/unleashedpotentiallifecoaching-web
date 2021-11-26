import { screen } from '@testing-library/react'
import CoachCard from 'components/molecules/CoachCard'
import { renderWithTheme } from 'components/test-util'
import React from 'react'

const mockProps = {
  image: {
    src: 'https://images.prismic.io/unleashedpotentiallifecoaching-web/064812f4-447a-46e0-88ca-8a10065b41a2_Jessica-Rebelo.webp?auto=compress,format',
    width: 300,
    height: 300,
    alt: 'Jessica',
  },
  name: 'Jessica Rebelo',
}

describe('<CoachCard />', () => {
  it('renders coach name', () => {
    renderWithTheme(<CoachCard {...mockProps} />)

    expect(screen.queryByText('Jessica Rebelo')).toBeInTheDocument()
  })
})
