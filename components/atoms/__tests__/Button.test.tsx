import { fireEvent, screen } from '@testing-library/react'
import Button from 'components/atoms/Button'
import { renderWithTheme } from 'components/test-util'
import React from 'react'

const mockProps = {
  handleClick: jest.fn(),
  children: <>Click Me</>,
  btnPadding: '16px',
  fontSize: '16px',
}

describe('<Button />', () => {
  it('renders the child node', () => {
    renderWithTheme(<Button {...mockProps} />)

    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('calls handlePress prop when clicked', () => {
    renderWithTheme(<Button {...mockProps} />)

    fireEvent.click(screen.getByText('Click Me'))
    expect(mockProps.handleClick).toHaveBeenCalledTimes(1)
  })
})
