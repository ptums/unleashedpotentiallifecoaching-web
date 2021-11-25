import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from 'components/test-util'
import Contact from 'components/organisms/footer/Contact'


describe('<Contact />', () => {
  it('renders business email', () => {
    renderWithTheme(<Contact />)

    expect(screen.queryByText('Unleashedpotentiallifecoaching@gmail.com')).toBeInTheDocument()
  })

  it('renders phone number one', () => {
    renderWithTheme(<Contact />)

    expect(screen.queryByText('(631) 432-8897')).toBeInTheDocument()
  })

  it('renders phone number two', () => {
    renderWithTheme(<Contact />)

    expect(screen.queryByText('(631) 507-7248')).toBeInTheDocument()
  })
})
