import { screen } from '@testing-library/react'
import Biography from 'components/organisms/coach/Biography'
import { Elements } from 'prismic-reactjs'
import React from 'react'
import { renderWithTheme } from 'test-util'

const mockProps = {
  biography: [
    {
      type: Elements.paragraph,
      text: "You can't appreciate the light without appreciating the darkness.",
      spans: [],
    },
  ],
}

describe('<Biography />', () => {
  it('renders biography text', () => {
    renderWithTheme(<Biography {...mockProps} />)

    expect(
      screen.queryByText("You can't appreciate the light without appreciating the darkness.")
    ).toBeInTheDocument()
  })
})
