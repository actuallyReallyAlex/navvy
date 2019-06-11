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

  test('Should have search capability.', () => {
    throw new Error('Add capability.')
  })

  test('Should have full screen capability.', () => {
    throw new Error('Add capability.')
  })

  test('Should have notifications.', () => {
    throw new Error('Add capability.')
  })

  test('Should have user avatar capability.', () => {
    throw new Error('Add capability.')
  })

  test('Should have settings capability.', () => {
    throw new Error('Add capability.')
  })
})
