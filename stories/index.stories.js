import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import Navvy from '../src/index.js'

storiesOf('Navvy', module).add('Basic', () => (
  <Navvy
    sections={[
      {
        heading: 'Navigation',
        links: [
          { icon: 'Dashboard', title: 'Dashboard' },
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
