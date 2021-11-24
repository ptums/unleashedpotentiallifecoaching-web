import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from 'components/test-util'
import HomeBanner from 'components/organisms/home/HomeBanner'

const mockProps = {
  imageUrl:
    'https://images.prismic.io/unleashedpotentiallifecoaching-web/064812f4-447a-46e0-88ca-8a10065b41a2_Jessica-Rebelo.webp?auto=compress,format',
  lineOne: 'Hello',
  lineTwo: 'World',
}

describe('<HomeBanner />', () => {
  it('renders line one', () => {
    renderWithTheme(<HomeBanner {...mockProps} />)

    expect(screen.queryByText('Hello')).toBeInTheDocument()
  })

  it('renders line one', () => {
    renderWithTheme(<HomeBanner {...mockProps} />)

    expect(screen.queryByText('World')).toBeInTheDocument()
  })
})
