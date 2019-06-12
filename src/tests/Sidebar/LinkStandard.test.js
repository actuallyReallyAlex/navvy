import React from 'react'
import LinkStandard from '../../Sidebar/LinkStandard'
import { shallow } from 'enzyme'

const defaultProps = {
  handler: jest.fn(),
  icon: 'Cube',
  selected: 'Selected',
  setSelected: jest.fn(),
  size: 'expanded',
  title: 'Title'
}

describe('<LinkStandard />', () => {
  afterEach(() => {
    defaultProps.handler.mockClear()
    defaultProps.setSelected.mockClear()
  })

  test('Should render the <LinkStandard /> component as a non-selected Link with sidebar expanded.', () => {
    const component = shallow(<LinkStandard {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should render the <LinkStandard /> component as a non-selected Link with sidebar collapsed.', () => {
    const component = shallow(
      <LinkStandard {...defaultProps} size="collapsed" />
    )
    expect(component).toMatchSnapshot()
  })

  test('Should render the <LinkStandard /> component as a selected Link with sidebar expanded.', () => {
    const component = shallow(
      <LinkStandard {...defaultProps} selected="Title" />
    )
    expect(component).toMatchSnapshot()
  })

  test('Should render the <LinkStandard /> component as a selected Link with sidebar collapsed.', () => {
    const component = shallow(
      <LinkStandard {...defaultProps} selected="Title" size="collapsed" />
    )
    expect(component).toMatchSnapshot()
  })

  test('Should call the link handler if the link is clicked.', () => {
    const component = shallow(<LinkStandard {...defaultProps} />)
    expect(defaultProps.handler).toHaveBeenCalledTimes(0)
    component.find('WithTheme(Button)').simulate('click')
    expect(defaultProps.handler).toHaveBeenCalledTimes(1)
  })
})
