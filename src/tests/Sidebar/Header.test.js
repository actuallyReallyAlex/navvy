import React from 'react'
import Header from '../../Sidebar/Header'
import { shallow } from 'enzyme'

const defaultProps = {
  heading: 'Heading'
}

describe('<Header />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <Header /> component with sidebar expanded.', () => {
    const component = shallow(<Header {...defaultProps} size="expanded" />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <Header /> component with sidebar collapsed.', () => {
    const component = shallow(<Header {...defaultProps} size="collapsed" />)
    expect(component).toMatchSnapshot()
  })
})
