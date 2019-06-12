import React from 'react'
import LinkIcon from '../../Sidebar/LinkIcon'
import { shallow } from 'enzyme'

const defaultProps = {
  icon: 'Cube'
}

describe('<LinkIcon />', () => {
  afterEach(() => {})

  test('Should render the <LinkIcon /> component.', () => {
    const component = shallow(<LinkIcon {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
