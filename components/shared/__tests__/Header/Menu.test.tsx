import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from 'components/test-util'
import Menu from 'components/shared/Header/Menu'

describe('<Menu />', () => {
  it('renders menu item', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText('Our Story')).toBeInTheDocument()
  })

  it('does not render malformed item', () => {
    renderWithTheme(<Menu />)

    expect(screen.queryByText('Our Story!')).toBeNull()
  })
})