import React from 'react'
import LinkCollapsibleChild from '../../Sidebar/LinkCollapsibleChild'
import { shallow } from 'enzyme'

const defaultProps = {
  handler: jest.fn(),
  icon: 'Cube',
  size: 'expanded',
  title: 'Title'
}

describe('<LinkCollapsibleChild />', () => {
  afterEach(() => {
    defaultProps.handler.mockClear()
  })

  test('Should render the <LinkCollapsibleChild /> component.', () => {
    const component = shallow(<LinkCollapsibleChild {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should call the link handler if the link is clicked.', () => {
    const component = shallow(<LinkCollapsibleChild {...defaultProps} />)
    expect(defaultProps.handler).toHaveBeenCalledTimes(0)
    component.find('WithTheme(Button)').simulate('click')
    expect(defaultProps.handler).toHaveBeenCalledTimes(1)
  })
})
