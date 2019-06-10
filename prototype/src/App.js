import React from 'react'
import { connect } from 'react-redux'
import { Box } from 'grommet'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Servicing from './applications/Servicing'
import Trancore from './applications/Trancore'

const App = ({ data, ui }) => {
  const applications = [
    {
      name: 'Servicing',
      app: Servicing
    },
    {
      name: 'Trancore',
      app: Trancore
    }
  ]

  const Application = applications.find(
    application => application.name === ui.currentSidebarItem
  ).app

  return (
    <Box fill>
      <Navbar />
      <Box direction="row" fill>
        <Sidebar />
        <Box background="#F8F9FB" fill>
          <Application />
        </Box>
      </Box>
    </Box>
  )
}

const mapStateToProps = ({ data, ui }) => ({ data, ui })

export default connect(mapStateToProps)(App)
