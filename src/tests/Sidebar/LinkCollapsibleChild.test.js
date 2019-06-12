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
})
