import React from 'react'
import Notifications from '../../Navbar/Notifications'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<Notifications />', () => {
  afterEach(() => {})

  test('Should render the <Notifications /> component.', () => {
    const component = shallow(<Notifications {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
