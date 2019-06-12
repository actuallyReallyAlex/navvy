import React from 'react'
import Link from '../../Sidebar/Link'
import { shallow } from 'enzyme'

const defaultProps = {
  collapsible: false,
  handler: jest.fn(),
  selected: 'Title',
  setSelected: jest.fn(),
  title: 'Title'
}

const collapsibleProps = {
  children: [{ icon: 'Cube', title: 'Child 1' }],
  collapsible: true,
  handler: jest.fn(),
  selected: 'Title',
  setSelected: jest.fn(),
  title: 'Title'
}

const nonSelectedLinkProps = {
  collapsible: false,
  handler: jest.fn(),
  selected: 'NA',
  setSelected: jest.fn(),
  title: 'Title'
}

describe('<Link />', () => {
  afterEach(() => {
    defaultProps.handler.mockClear()
    defaultProps.setSelected.mockClear()
    collapsibleProps.handler.mockClear()
    collapsibleProps.setSelected.mockClear()
    nonSelectedLinkProps.handler.mockClear()
    nonSelectedLinkProps.setSelected.mockClear()
  })

  test('Should render a selected Link with sidebar expanded.', () => {
    const component = shallow(<Link {...defaultProps} size="expanded" />)
    expect(component).toMatchSnapshot()
  })

  test('Should render a selected Link with sidebar collapsed.', () => {
    const component = shallow(<Link {...defaultProps} size="collapsed" />)
    expect(component).toMatchSnapshot()
  })

  test('Should render a non-selected Link.', () => {
    const component = shallow(
      <Link {...nonSelectedLinkProps} size="expanded" />
    )
    expect(component).toMatchSnapshot()
  })

  test('Should render a collapsable link.', () => {
    const component = shallow(<Link {...collapsibleProps} size="expanded" />)
    expect(component).toMatchSnapshot()
  })
})
