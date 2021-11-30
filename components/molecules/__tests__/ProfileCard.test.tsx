import { screen } from '@testing-library/react'
import ProfileCard from 'components/molecules/ProfileCard'
import React from 'react'
import { renderWithTheme } from 'test-util'

const mockProps = {
  name: 'Jess rebelo',
  image: {
    src: 'https://images.prismic.io/unleashedpotentiallifecoaching-web/064812f4-447a-46e0-88ca-8a10065b41a2_Jessica-Rebelo.webp?auto=compress,format',
    width: 300,
    height: 300,
    alt: 'Jessica',
  },
  handleClick: jest.fn(),
}

describe('<ProfileCard />', () => {
  it('renders coach name', () => {
    renderWithTheme(<ProfileCard {...mockProps} />)

    expect(screen.queryByText('Online Coaching with Jess rebelo')).toBeInTheDocument()
  })

  it('renders coach image', () => {
    renderWithTheme(<ProfileCard {...mockProps} />)

    expect(screen.queryByAltText('Jessica')).toBeInTheDocument()
  })
})
