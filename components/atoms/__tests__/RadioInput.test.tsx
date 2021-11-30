import { fireEvent, screen } from '@testing-library/react'
import RadioInput from 'components/atoms/RadioInput'
import React from 'react'
import { renderWithTheme } from 'test-util'

const mockProps = {
  title: 'Radio RadioInput Options',
  label: 'first-radio',
  handleOnChange: jest.fn(),
  options: ['Click 1', 'Click 2'],
}

describe('<RadioInput />', () => {
  it('renders the first option', () => {
    renderWithTheme(<RadioInput {...mockProps} />)
    const radio = screen.getByLabelText('Click 1')

    fireEvent.change(radio, { target: { value: 'Click 1' } })
    expect((radio as HTMLInputElement).value).toBe('Click 1')
  })
})
