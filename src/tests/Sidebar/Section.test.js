import React from 'react'
import Section from '../../Sidebar/Section'
import { shallow } from 'enzyme'

const defaultProps = {
  heading: 'Heading',
  links: [
    { title: 'Form' },
    { title: 'Form Picker' },
    { title: 'Form Select' },
    { title: 'Form Masking' },
    { title: 'Form Wizard' }
  ],
  selected: 'Other',
  setSelected: jest.fn(),
  size: 'expanded'
}

describe('<Section />', () => {
  afterEach(() => {
    defaultProps.setSelected.mockClear()
  })

  test('Should render the <Section /> component.', () => {
    const component = shallow(<Section {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
