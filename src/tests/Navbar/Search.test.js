import React from 'react'
import Search from '../../Navbar/Search'
import { shallow } from 'enzyme'
import { render, fireEvent, cleanup } from '@testing-library/react'

const defaultProps = {}

describe('<Search />', () => {
  afterEach(cleanup)

  test('Should render the <Search /> component.', () => {
    const component = shallow(<Search {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should update the state/value of the Search component as user types.', () => {
    const { container, getByDisplayValue } = render(
      <Search {...defaultProps} />
    )
    const input = getByDisplayValue('')
    expect(input.value).toBe('')
    fireEvent.change(input, { target: { value: 'New value...' } })
    expect(input.value).toBe('New value...')
  })
})
