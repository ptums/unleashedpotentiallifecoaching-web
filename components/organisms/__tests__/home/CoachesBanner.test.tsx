import { screen } from '@testing-library/react'
import CoachesBanner from 'components/organisms/home/CoachesBanner'
import React from 'react'
import { renderWithTheme } from 'test-util'

const mockProps = [
  {
    id: 1,
    seo: {
      title: '...',
      metaDescription: '...',
    },
    name: 'Jessica Rebelo',
    image: {
      src: 'https://images.prismic.io/unleashedpotentiallifecoaching-web/064812f4-447a-46e0-88ca-8a10065b41a2_Jessica-Rebelo.webp?auto=compress,format',
      width: 300,
      height: 300,
      alt: 'Jess',
    },
  },
]

describe('<CoachesBanner />', () => {
  it('renders title', () => {
    renderWithTheme(<CoachesBanner coaches={mockProps} />)

    expect(screen.queryByText('Take the first step')).toBeInTheDocument()
  })

  it('renders coach', () => {
    renderWithTheme(<CoachesBanner coaches={mockProps} />)

    expect(screen.queryByText('Jessica Rebelo')).toBeInTheDocument()
  })
})
