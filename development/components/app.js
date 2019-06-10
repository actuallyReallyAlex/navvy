import React, { Component } from 'react'
import Navvy from '../../../dist/main'

class App extends Component {
  render() {
    return (
      <Navvy
        sections={[
          {
            heading: 'Navigation',
            links: [
              {
                title: 'Dashboard'
              },
              {
                title: 'Page layouts'
              },
              {
                title: 'Navigation'
              },
              {
                title: 'Widget'
              }
            ]
          },
          {
            heading: 'UI Element',
            links: [
              {
                title: 'Basic'
              },
              {
                title: 'Advance'
              },
              {
                title: 'Extra'
              },
              {
                title: 'Animations'
              },
              {
                title: 'Icons'
              }
            ]
          },
          {
            heading: 'Forms',
            links: [
              {
                title: 'Form'
              },
              {
                title: 'Form Picker'
              },
              {
                title: 'Form Select'
              },
              {
                title: 'Form Masking'
              },
              {
                title: 'Form Wizard'
              }
            ]
          },
          {
            heading: 'Tables',
            links: [
              {
                title: 'Bootstrap Table'
              },
              {
                title: 'Data Table'
              },
              {
                title: 'DT Extensions'
              },
              {
                title: 'FooTable'
              },
              {
                title: 'Handson Table'
              },
              {
                title: 'Editable Table'
              }
            ]
          },
          {
            heading: 'Chart and maps',
            links: [
              {
                title: 'Charts'
              },
              {
                title: 'Maps'
              }
            ]
          },
          {
            heading: 'Pages',
            links: [
              {
                title: 'Authentication'
              },
              {
                title: 'Maintenance'
              },
              {
                title: 'Email'
              }
            ]
          },
          {
            heading: 'App',
            links: [
              {
                title: 'To-Do'
              }
            ]
          }
        ]}
      >
        <h1>thing 1</h1>
        <h1>thing 2</h1>
      </Navvy>
    )
  }
}

export default App
