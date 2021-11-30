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
    const input: HTMLInputElement = screen.getByLabelText('text-input')

    fireEvent.change(input, { target: { value: 'Hello!' } })
    expect(input.value).toBe('Hello!')
  })

  it('renders the textarea value', () => {
    renderWithTheme(<FormInput {...mockPropsTwo} />)
    const textarea = screen.getByLabelText('textarea-input')

    fireEvent.change(textarea, { target: { value: 'Hello!' } })
    expect((textarea as HTMLInputElement).value).toBe('Hello!')
  })
})
