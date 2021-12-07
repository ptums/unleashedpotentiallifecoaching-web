import { fireEvent, screen } from '@testing-library/react'
import ReviewForm from 'components/organisms/reviews/ReviewForm'
import React from 'react'
import { renderWithTheme } from 'test-util'

describe('<ReviewForm/>', () => {
  it('matches snapshot', () => {
    renderWithTheme(<ReviewForm />)
    expect(screen).toMatchSnapshot()
  })
})
