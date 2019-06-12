import React from 'react'
import Link from '../../Sidebar/Link'
import { shallow } from 'enzyme'

const defaultProps = {
  handler: jest.fn(),
  selected: 'Title',
  setSelected: jest.fn(),
  size: 'expanded',
  title: 'Title'
}

const nonSelectedLinkProps = {
  handler: jest.fn(),
  selected: 'NA',
  setSelected: jest.fn(),
  size: 'expanded',
  title: 'Title'
}

describe('<Link />', () => {
  afterEach(() => {
    defaultProps.handler.mockClear()
  })

  test('Should render a selected Link.', () => {
    const component = shallow(<Link {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should render a non-selected Link.', () => {
    const component = shallow(<Link {...nonSelectedLinkProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should call the link handler if the link is clicked.', () => {
    const component = shallow(<Link {...defaultProps} />)
    expect(defaultProps.handler).not.toHaveBeenCalled()
    component.find('WithTheme(Button)').simulate('click')
    expect(defaultProps.handler).toHaveBeenCalled()
  })

  test('Should render a collapsable link.', () => {
    const component = shallow(<Link {...collapsableProps} />)
  })
})
