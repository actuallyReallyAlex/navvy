import React from 'react'
import Header from '../../Sidebar/Header'
import { shallow } from 'enzyme'

const defaultProps = {
  heading: 'Heading'
}

describe('<Header />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <Header /> component.', () => {
    const component = shallow(<Header {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
