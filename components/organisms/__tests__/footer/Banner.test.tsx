import { screen } from '@testing-library/react'
import Banner from 'components/organisms/footer/Banner'
import React from 'react'
import { renderWithTheme } from 'test-util'

describe('<Banner />', () => {
  it('renders header line', () => {
    renderWithTheme(<Banner />)

    expect(
      screen.queryByText(
        'Give us a call, shoot us an email, follow us on social media, or fill out the form below...'
      )
    ).toBeInTheDocument()
  })

  it('renders sub header line', () => {
    renderWithTheme(<Banner />)

    expect(screen.queryByText('We’d love to hear from you!')).toBeInTheDocument()
  })
})
