import { screen } from '@testing-library/react'
import Footer from 'components/shared/Footer'
import React from 'react'
import { renderWithTheme } from 'test-util'

describe('<Footer/>', () => {
  it('renders snapshot', () => {
    renderWithTheme(<Footer />)
    expect(screen).toMatchSnapshot()
  })
})
