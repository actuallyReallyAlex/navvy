import React from 'react'
import Logo from '../../Sidebar/Logo'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<Logo />', () => {
  afterEach(() => {})

  test('Should render the <Logo /> component with sidebar expanded.', () => {
    const component = shallow(<Logo {...defaultProps} size="expanded" />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <Logo /> component with sidebar collapsed.', () => {
    const component = shallow(<Logo {...defaultProps} size="collapsed" />)
    expect(component).toMatchSnapshot()
  })
})
