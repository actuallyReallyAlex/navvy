import React from 'react'
import Navbar from '../../Navbar/index'
import { shallow } from 'enzyme'

const defaultProps = {
  setSize: jest.fn()
}

describe('<Navbar />', () => {
  afterEach(() => {})

  test('Should render the <Navbar /> component with sidebar expanded.', () => {
    const component = shallow(<Navbar {...defaultProps} size="expanded" />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <Navbar /> component with sidebar collapsed.', () => {
    const component = shallow(<Navbar {...defaultProps} size="collapsed" />)
    expect(component).toMatchSnapshot()
  })

  test('Should have full screen capability.', () => {
    throw new Error('Add capability.')
  })

  test('Should have the ability to collapse the sidebar.', () => {
    const component = shallow(<Navbar {...defaultProps} size="expanded" />)
    const collapseButton = component.find('WithTheme(Button)')
    expect(component).toMatchSnapshot()
    expect(defaultProps.setSize).not.toHaveBeenCalled()
    collapseButton.simulate('click')
    expect(component).toMatchSnapshot()
    expect(defaultProps.setSize).toHaveBeenCalledTimes(1)
  })

  test('Should have the ability to expand the sidebar.', () => {
    const component = shallow(<Navbar {...defaultProps} size="collapsed" />)
    const expandButton = component.find('WithTheme(Button)')
    expect(component).toMatchSnapshot()
    expect(defaultProps.setSize).not.toHaveBeenCalled()
    expandButton.simulate('click')
    expect(component).toMatchSnapshot()
    expect(defaultProps.setSize).toHaveBeenCalledTimes(1)
  })
})
