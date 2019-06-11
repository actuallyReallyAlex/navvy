import React from 'react'
import Navvy from '../index'
import { shallow } from 'enzyme'

const defaultProps = {
  sections: [
    {
      heading: 'Navigation',
      links: [
        { title: 'Dashboard' },
        {
          title: 'Page layouts',
          handler: () => console.log('LOL')
        },
        { title: 'Navigation' },
        { title: 'Widget' }
      ]
    },
    {
      heading: 'UI Element',
      links: [
        { title: 'Basic' },
        { title: 'Advance' },
        { title: 'Extra' },
        { title: 'Animations' },
        { title: 'Icons' }
      ]
    },
    {
      heading: 'Forms',
      links: [
        { title: 'Form' },
        { title: 'Form Picker' },
        { title: 'Form Select' },
        { title: 'Form Masking' },
        { title: 'Form Wizard' }
      ]
    }
  ]
}

describe('<Navvy />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <Navvy /> component.', () => {
    const component = shallow(<Navvy {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })
})
