import { screen } from '@testing-library/react'
import ImageWrapper from 'components/atoms/ImageWrapper'
import React from 'react'
import { renderWithTheme } from 'test-util'

const mockProps = {
  src: 'https://images.prismic.io/unleashedpotentiallifecoaching-web/064812f4-447a-46e0-88ca-8a10065b41a2_Jessica-Rebelo.webp?auto=compress,format',
  width: 300,
  height: 300,
  alt: 'Jessica Rebelo',
}

describe('<ImageWrapper />', () => {
  it('renders image alt tag', () => {
    renderWithTheme(<ImageWrapper {...mockProps} />)

    expect(screen.getByAltText('Jessica Rebelo')).toBeInTheDocument()
  })
})
