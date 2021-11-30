import { fireEvent, screen } from '@testing-library/react'
import MenuCloseWrapper from 'components/organisms/header/MenuCloseWrapper'
import React from 'react'
import { renderWithTheme } from 'test-util'

const mockProps = {
  children: <>Hello World</>,
  index: 0,
  handleOnClick: jest.fn(),
}

describe('<MenuCloseWrapper />', () => {
  it('renders component children', () => {
    renderWithTheme(<MenuCloseWrapper {...mockProps} />)

    expect(screen.queryByText('Hello World')).toBeInTheDocument()
  })

  it('calls handleOnClick prop when clicked', () => {
    renderWithTheme(<MenuCloseWrapper {...mockProps} />)

    fireEvent.click(screen.getByText('Hello World'))
    expect(mockProps.handleOnClick).toHaveBeenCalledTimes(1)
  })
})
