import React from 'react'
import Logo from '../../Sidebar/Logo'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<Logo />', () => {
  afterEach(() => {})

  test('Should render the <Logo /> component.', () => {
    const component = shallow(<Logo {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
