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
    ]}
  >
    <h1>Thing 1</h1>
    <h2>Thing 2</h2>
  </Navvy>
))
