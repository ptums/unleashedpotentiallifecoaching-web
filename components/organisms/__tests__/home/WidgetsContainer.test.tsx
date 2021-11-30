import { screen } from '@testing-library/react'
import WidgetsContainer from 'components/organisms/home/WidgetsContainer'
import { Elements } from 'prismic-reactjs'
import React from 'react'
import { renderWithTheme } from 'test-util'

const mockProps = [
  {
    id: 1,
    description: 'World',
    title: [
      {
        type: Elements.paragraph,
        text: 'Hello',
        spans: [],
      },
    ],
    imageUrl:
      'https://images.prismic.io/unleashedpotentiallifecoaching-web/064812f4-447a-46e0-88ca-8a10065b41a2_Jessica-Rebelo.webp?auto=compress,format',
  },
]

describe('<WidgetsContainer />', () => {
  it('renders widget title', () => {
    renderWithTheme(<WidgetsContainer widgets={mockProps} />)

    expect(screen.queryByText('Hello')).toBeInTheDocument()
  })

  it('renders widget description', () => {
    renderWithTheme(<WidgetsContainer widgets={mockProps} />)

    expect(screen.queryByText('World')).toBeInTheDocument()
  })
})
