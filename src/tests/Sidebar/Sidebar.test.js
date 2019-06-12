import React from 'react'
import Sidebar from '../../Sidebar/index'
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

describe('<Sidebar />', () => {
  afterEach(() => {
    // defaultProps.handler.mockClear()
  })

  test('Should render the <Sidebar /> component.', () => {
    const component = shallow(<Sidebar {...defaultProps} />)
    expect(component).toMatchSnapshot()
  })

  test('Should be able to render in "light" mode.', () => {
    const component = shallow(<Sidebar {...defaultProps} background="light" />)
    expect(component).toMatchSnapshot()
  })

  test('Should be able to render in "dark" mode.', () => {
    const component = shallow(<Sidebar {...defaultProps} background="dark" />)
    expect(component).toMatchSnapshot()
  })

  test('Should have the ability to collapse the sidebar.', () => {
    const component = shallow(<Sidebar {...defaultProps} />)
    const collapseButton = component.find('collapse-button-selector')
    expect(component).toMatchSnapshot()
    collapseButton.simulate('click')
    expect(component).toMatchSnapshot()
  })
})
