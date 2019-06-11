import React from 'react'
import Search from '../../Navbar/Search'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<Search />', () => {
  afterEach(() => {})

  test('Should render the <Search /> component.', () => {
    const component = shallow(<Search {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
