import React from 'react'
import PropTypes from 'prop-types'
import { Box, Clock } from 'grommet'
import { connect } from 'react-redux'
import SidebarItem from './SidebarItem'
import SidebarHeading from './SidebarHeading'

const Sidebar = ({ dispatch, ui }) => {
  const { isSidebarExpanded } = ui
  const mainSidebarItems = ['Servicing', 'Trancore']

  return (
    <Box
      className={isSidebarExpanded ? 'sidebar' : 'sidebar small'}
      fill="vertical"
      justify="between"
    >
      <Box>
        <SidebarHeading title="APPLICATIONS" />
        {mainSidebarItems.map(title => (
          <SidebarItem key={title} title={title} />
        ))}
      </Box>
      <Box align="center" justify="center">
        <Clock hourLimit="12" margin="medium" precision="minutes" type="digital" />
      </Box>
    </Box>
  )
}

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ui: PropTypes.object.isRequired
}

const mapStateToProps = ({ ui }) => ({ ui })

export default connect(mapStateToProps)(Sidebar)
