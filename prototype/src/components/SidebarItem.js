import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Text } from 'grommet'
import { Server } from 'grommet-icons'
import { connect } from 'react-redux'
import { setSidebarItem } from '../redux/actions/ui'

const SidebarItem = ({ dispatch, title, ui }) => {
  const { currentSidebarItem, isSidebarExpanded } = ui

  return (
    <Button
      gap="small"
      hoverIndicator
      onClick={() => dispatch(setSidebarItem(title))}
      pad
      plain
    >
      <Box
        align="start"
        className={currentSidebarItem === title ? 'bg-primary' : undefined}
        direction="row"
        margin="none"
        pad="xsmall"
        style={currentSidebarItem === title ? { color: 'white' } : undefined}
      >
        <Box
          align="center"
          direction={isSidebarExpanded ? 'row' : 'column'}
          gap={isSidebarExpanded ? 'small' : 'xsmall'}
          justify="center"
          margin="none"
          pad="small"
        >
          <Server color={currentSidebarItem === title ? 'white' : undefined} />
          <Text>{title}</Text>
        </Box>
      </Box>
    </Button>
  )
}

SidebarItem.propTypes = {
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  ui: PropTypes.object.isRequired
}

const mapStateToProps = ({ ui }) => ({ ui })

export default connect(mapStateToProps)(SidebarItem)
