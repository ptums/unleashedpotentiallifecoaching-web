import { fireEvent, screen } from '@testing-library/react'
import Form from 'components/organisms/footer/Form'
import React from 'react'
import { renderWithTheme } from 'test-util'

describe('<Form/>', () => {
  it('handles change in name text input', () => {
    renderWithTheme(<Form />)
    const input: HTMLInputElement = screen.getByLabelText('fullName')

    fireEvent.change(input, { target: { value: 'Peter' } })
    expect(input.value).toBe('Peter')
  })

  it('handles change in email text input', () => {
    renderWithTheme(<Form />)
    const input: HTMLInputElement = screen.getByLabelText('email')

    fireEvent.change(input, { target: { value: 't@t.com' } })
    expect(input.value).toBe('t@t.com')
  })

  it('handles change in message textarea', () => {
    renderWithTheme(<Form />)
    const input: HTMLInputElement = screen.getByLabelText('message')

    fireEvent.change(input, { target: { value: 'abc 123' } })
    expect(input.value).toBe('abc 123')
  })
})
