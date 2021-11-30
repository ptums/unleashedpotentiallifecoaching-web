import { screen } from '@testing-library/react'
import Form from 'components/organisms/footer/Form'
import React from 'react'
import { renderWithTheme } from 'test-util'

describe('<Form/>', () => {
  it('renders snapshot', () => {
    renderWithTheme(<Form />)
    expect(screen).toMatchSnapshot()
  })
})
