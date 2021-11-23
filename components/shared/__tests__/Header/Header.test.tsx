import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from '../../../test-util'
import Header from '..'

describe('<Header />', () => {
  it('renders name', () => {
    renderWithTheme(<Header />)

    expect(screen.queryByText('Unleashed Potential: Life Coaching')).toBeInTheDocument()
  })

  it('renders menu component', () => {
    renderWithTheme(<Header />)

    expect(screen.queryByText('Our Story')).toBeInTheDocument()
  })
})