import { fireEvent, screen } from '@testing-library/react'
import ReviewForm from 'components/organisms/reviews/ReviewForm'
import React from 'react'
import { renderWithTheme } from 'test-util'

describe('<ReviewForm/>', () => {
  it('handles change in recommend radio input', () => {
    renderWithTheme(<ReviewForm />)
    const input: HTMLInputElement[] = screen.queryAllByLabelText('recommend')

    fireEvent.change(input[0], { target: { value: 'Yes' } })
    expect(input[0].value).toBe('Yes')
  })

  it('handles change in phone  text input', () => {
    renderWithTheme(<ReviewForm />)
    const input: HTMLInputElement = screen.getByLabelText('phone')

    fireEvent.change(input, { target: { value: '123-456' } })
    expect(input.value).toBe('123-456')
  })

  it('handles change in comment textarea', () => {
    renderWithTheme(<ReviewForm />)
    const input: HTMLInputElement = screen.getByLabelText('comments')

    fireEvent.change(input, { target: { value: 'abc 123' } })
    expect(input.value).toBe('abc 123')
  })
})
