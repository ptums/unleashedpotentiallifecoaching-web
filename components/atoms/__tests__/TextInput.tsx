import { screen } from '@testing-library/react'
import TextInput from 'components/atoms/TextInput'
import React from 'react'
import { renderWithTheme } from 'test-util'

const mockProps = {
  id: 'test-phone-input',
  type: 'input',
  name: 'phone',
  placeHolder: 'Phone',
  input: 'phone',
}

describe('<TextInput />', () => {
  it('renders the proper name attribute', () => {
    renderWithTheme(<TextInput {...mockProps} />)
    const input: HTMLInputElement = screen.getByLabelText('test-phone-input')
    expect(input.name).toBe(mockProps.name)
  })

  it('renders different name attribute after prop change', () => {
    renderWithTheme(<TextInput {...mockProps} name="phoneNumberz" />)
    const input: HTMLInputElement = screen.getByLabelText('test-phone-input')

    expect(input.name).toBe('phoneNumberz')
    expect(input.name).not.toBe('phone')
  })

  it('renders the input element when the type prop is "phone"', () => {
    const { container } = renderWithTheme(<TextInput {...mockProps} type="phone" />)

    expect(container.querySelector('textarea')).toBeNull()
  })

  it('renders the correct element when the type prop is changed to "textarea"', () => {
    const { container } = renderWithTheme(<TextInput {...mockProps} type="textarea" />)

    expect(container.querySelector('textarea')).not.toBeNull()
  })
})
