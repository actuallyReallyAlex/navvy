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

  test('Should render the <LinkStandard /> component.', () => {
    const component = shallow(<LinkStandard {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
