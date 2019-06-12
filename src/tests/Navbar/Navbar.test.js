import React from 'react'
import Navbar from '../../Navbar/index'
import { shallow } from 'enzyme'

const defaultProps = {
  setSize: jest.fn(),
  size: 'expanded'
}

describe('<Navbar />', () => {
  afterEach(() => {})

  test('Should render the <Navbar /> component.', () => {
    const component = shallow(<Navbar {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should have full screen capability.', () => {
    throw new Error('Add capability.')
  })

  test('Should have the ability to collapse the sidebar.', () => {
    const component = shallow(<Navbar {...defaultProps} />)
    const collapseButton = component.find('WithTheme(Button)')
    expect(component).toMatchSnapshot()
    expect(defaultProps.setSize).not.toHaveBeenCalled()
    collapseButton.simulate('click')
    expect(component).toMatchSnapshot()
    expect(defaultProps.setSize).toHaveBeenCalledTimes(1)
  })
})
