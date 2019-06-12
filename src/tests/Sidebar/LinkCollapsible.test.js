import React from 'react'
import LinkCollapsible from '../../Sidebar/LinkCollapsible'
import { shallow } from 'enzyme'

const defaultProps = {
  children: [{ icon: 'Cube', title: 'Child 1' }],
  handler: jest.fn(),
  icon: 'Cube',
  selected: 'Selected',
  setSelected: jest.fn(),
  size: 'expanded',
  title: 'Title'
}

describe('<LinkCollapsible />', () => {
  afterEach(() => {
    defaultProps.handler.mockClear()
    defaultProps.setSelected.mockClear()
  })

  test('Should render the <LinkCollapsible /> component.', () => {
    const component = shallow(<LinkCollapsible {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

//   test.only('Should call the link handler if the link is clicked.', () => {
//     const component = shallow(<Link {...defaultProps} size="expanded" />)
//     console.log(component.debug())
//     console.log(component.find('LinkStandard').debug())
//     expect(defaultProps.handler).not.toHaveBeenCalled()
//     component.find('LinkStandard').simulate('click')
//     expect(defaultProps.handler).toHaveBeenCalled()
//   })
})
