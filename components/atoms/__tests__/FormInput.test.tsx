import { fireEvent, screen } from '@testing-library/react'
import FormInput from 'components/atoms/FormInput'
import React from 'react'
import { renderWithTheme } from 'test-util'

const mockPropsOne = {
  label: 'text-input',
  handleOnChange: jest.fn(),
  value: 'Hello!',
  placeHolder: 'Text input here',
  type: 'input',
}

const mockPropsTwo = {
  label: 'textarea-input',
  handleOnChange: jest.fn(),
  value: 'Hello!',
  placeHolder: 'Textarea input here',
  type: 'textarea',
}

describe('<FormInput />', () => {
  it('renders the text input value', () => {
    renderWithTheme(<FormInput {...mockPropsOne} />)
    const input = screen.getByLabelText('text-input')

    fireEvent.change(input, { target: { value: 'Hello!' } })
    expect((input as HTMLInputElement).value).toBe('Hello!')
  })

  it('renders the textarea value', () => {
    renderWithTheme(<FormInput {...mockPropsTwo} />)
    const radio = screen.getByLabelText('textarea-input')

    fireEvent.change(radio, { target: { value: 'Hello!' } })
    expect((radio as HTMLInputElement).value).toBe('Hello!')
  })
})
