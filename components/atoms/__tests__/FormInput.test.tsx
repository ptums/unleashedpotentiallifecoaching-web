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
  it('renders the the input value properly', () => {
    renderWithTheme(<FormInput {...mockPropsOne} />)
    const input: HTMLInputElement = screen.getByLabelText('text-input')

    fireEvent.change(input, { target: { value: mockPropsOne.value } })
    expect(input.value).toBe(mockPropsOne.value)
  })

  it('does not mutate the input value', () => {
    renderWithTheme(<FormInput {...mockPropsOne} />)
    const input: HTMLInputElement = screen.getByLabelText('text-input')

    fireEvent.change(input, { target: { value: mockPropsOne.value } })
    expect(input.value).not.toBe('Hello')
  })

  it('renders the textarea value properly', () => {
    renderWithTheme(<FormInput {...mockPropsTwo} />)
    const textarea = screen.getByLabelText('textarea-input')

    fireEvent.change(textarea, { target: { value: mockPropsTwo.value } })
    expect((textarea as HTMLInputElement).value).toBe('Hello!')
  })

  it('does not mutate the textarea value properly', () => {
    renderWithTheme(<FormInput {...mockPropsTwo} />)
    const textarea = screen.getByLabelText('textarea-input')

    fireEvent.change(textarea, { target: { value: mockPropsTwo.value } })
    expect((textarea as HTMLInputElement).value).not.toBe('Hello')
  })
})
