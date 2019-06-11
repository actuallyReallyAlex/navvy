import React from 'react'
import Navbar from '../../Navbar/index'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<Navbar />', () => {
  afterEach(() => {})

  test('Should render the <Navbar /> component.', () => {
    const component = shallow(<Navbar {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
