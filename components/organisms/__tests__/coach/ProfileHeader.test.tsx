import { screen } from '@testing-library/react'
import ProfileHeader from 'components/organisms/coach/ProfileHeader'
import { renderWithTheme } from 'components/test-util'
import { Elements } from 'prismic-reactjs'
import React from 'react'

const mockProps = {
  name: 'Jessica Rebelo',
  image: {
    src: 'https://images.prismic.io/unleashedpotentiallifecoaching-web/064812f4-447a-46e0-88ca-8a10065b41a2_Jessica-Rebelo.webp?auto=compress,format',
    width: 300,
    height: 300,
    alt: 'Jessica',
  },
  welcomeMessage: [
    {
      type: Elements.paragraph,
      text: "You can't appreciate the light without appreciating the darkness.",
      spans: [],
    },
  ],
}

describe('<ProfileHeader />', () => {
  it('renders welcome message', () => {
    renderWithTheme(<ProfileHeader {...mockProps} />)

    expect(
      screen.queryByText("You can't appreciate the light without appreciating the darkness.")
    ).toBeInTheDocument()
  })

  it("renders coache's name", () => {
    renderWithTheme(<ProfileHeader {...mockProps} />)

    expect(screen.queryByText("Hi, I'm Jessica")).toBeInTheDocument()
  })

  it("renders coache's image", () => {
    renderWithTheme(<ProfileHeader {...mockProps} />)

    expect(screen.queryByAltText('Jessica')).toBeInTheDocument()
  })
})
