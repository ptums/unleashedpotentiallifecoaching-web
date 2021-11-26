import { screen } from '@testing-library/react'
import Footer from 'components/shared/Footer'
import { renderWithTheme } from 'components/test-util'
import React from 'react'

describe('<Footer/>', () => {
  it('renders snapshot', () => {
    renderWithTheme(<Footer />)
    expect(screen).toMatchSnapshot()
  })
})
