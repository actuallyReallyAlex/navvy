import React from 'react'
import Navbar from '../../Navbar/index'
import { shallow } from 'enzyme'

const defaultProps = {
  setSize: jest.fn()
}

describe('<Navbar />', () => {
  afterEach(() => {
    defaultProps.setSize.mockClear()
  })

  test('Should render the <Navbar /> component with sidebar expanded.', () => {
    const component = shallow(<Navbar {...defaultProps} size="expanded" />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <Navbar /> component with sidebar collapsed.', () => {
    const component = shallow(<Navbar {...defaultProps} size="collapsed" />)
    expect(component).toMatchSnapshot()
  })

  test('Should have ability to expand to fullscreen.', () => {
    document.documentElement.requestFullscreen = jest.fn()
    const component = shallow(<Navbar {...defaultProps} size="expanded" />)
    const fullScreenToggle = component.find('WithTheme(Button)').at(1)
    expect(document.documentElement.requestFullscreen).toHaveBeenCalledTimes(0)
    fullScreenToggle.simulate('click')
    expect(document.documentElement.requestFullscreen).toHaveBeenCalledTimes(1)
    document.documentElement.requestFullscreen.mockClear()
  })

  test('Should have ability to close fullscreen.', () => {
    document.fullscreenElement = true
    document.exitFullscreen = jest.fn()
    const component = shallow(<Navbar {...defaultProps} size="expanded" />)
    const fullScreenToggle = component.find('WithTheme(Button)').at(1)
    fullScreenToggle.simulate('click')
    expect(document.exitFullscreen).toHaveBeenCalledTimes(1)
    fullScreenToggle.simulate('click')
    expect(document.exitFullscreen).toHaveBeenCalledTimes(2)
    document.exitFullscreen.mockClear()
  })

  test('Should have the ability to collapse the sidebar.', () => {
    const component = shallow(<Navbar {...defaultProps} size="expanded" />)
    const collapseButton = component.find('WithTheme(Button)').at(0)
    expect(component).toMatchSnapshot()
    expect(defaultProps.setSize).not.toHaveBeenCalled()
    collapseButton.simulate('click')
    expect(component).toMatchSnapshot()
    expect(defaultProps.setSize).toHaveBeenCalledTimes(1)
  })

  test('Should have the ability to expand the sidebar.', () => {
    const component = shallow(<Navbar {...defaultProps} size="collapsed" />)
    const expandButton = component.find('WithTheme(Button)').at(0)
    expect(component).toMatchSnapshot()
    expect(defaultProps.setSize).not.toHaveBeenCalled()
    expandButton.simulate('click')
    expect(component).toMatchSnapshot()
    expect(defaultProps.setSize).toHaveBeenCalledTimes(1)
  })
})
