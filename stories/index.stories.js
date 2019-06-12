import React from 'react'
import { Image } from 'grommet'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Navvy from '../src/index.js'

storiesOf('Navvy', module).add('Basic', () => (
  <Navvy
    logo="D A S H B O A R D"
    sections={[
      {
        heading: 'Navigation',
        links: [
          {
            collapsible: true,
            children: [
              {
                icon: 'Cube',
                title: 'Child 1'
              },
              {
                icon: 'Cubes',
                title: 'Child 2'
              }
            ],
            icon: 'Dashboard',
            title: 'Dashboard'
          },
          {
            icon: 'Template',
            title: 'Page layouts',
            handler: () => console.log('LOL')
          },
          { icon: 'Sidebar', title: 'Navigation' },
          { icon: 'Apps', title: 'Widget' }
        ]
      },
      {
        heading: 'UI Element',
        links: [
          { icon: 'Add', title: 'Basic' },
          { icon: 'Action', title: 'Advanced' },
          { icon: 'Ad', title: 'Extra' },
          { icon: 'ThreeD', title: 'Animations' },
          { icon: 'Cubes', title: 'Icons' }
        ]
      },
      {
        heading: 'Forms',
        links: [
          { icon: 'Document', title: 'Form' },
          { icon: 'FormAdd', title: 'Form Picker' },
          { icon: 'FormCheckmark', title: 'Form Select' },
          { icon: 'FormFolder', title: 'Form Masking' },
          { icon: 'Magic', title: 'Form Wizard' }
        ]
      }
    ]}
  >
    <h1>Thing 1</h1>
    <h2>Thing 2</h2>
  </Navvy>
))
