import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from 'components/test-util'
import RowWidget from 'components/molecules/RowWidget'

const mockProps = {
  imageUrl: 'https://images.prismic.io/unleashedpotentiallifecoaching-web/064812f4-447a-46e0-88ca-8a10065b41a2_Jessica-Rebelo.webp?auto=compress,format',
  title: "Hello",
  description: "World"
}

describe('<RowWidget />', () => {
  it('renders widget title', () => {
    renderWithTheme(<RowWidget {...mockProps} />)

    expect(screen.queryByText('Hello')).toBeInTheDocument()
  })

  it('renders widget description', () => {
    renderWithTheme(<RowWidget {...mockProps} />)

    expect(screen.queryByText('World')).toBeInTheDocument()
  })  
})
