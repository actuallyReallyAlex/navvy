import React from 'react'
import LinkIndicator from '../../Sidebar/LinkIndicator'
import { shallow } from 'enzyme'

const defaultProps = {}

describe('<LinkIndicator />', () => {
  afterEach(() => {})

  test('Should render the <LinkIndicator /> component.', () => {
    const component = shallow(<LinkIndicator {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
