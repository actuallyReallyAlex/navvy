import React from 'react'
import UserMenu from '../../Navbar/UserMenu'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<UserMenu />', () => {
  afterEach(() => {})

  test('Should render the <UserMenu /> component.', () => {
    const component = shallow(<UserMenu {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
