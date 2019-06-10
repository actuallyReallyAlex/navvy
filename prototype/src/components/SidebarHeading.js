import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'

const SidebarHeading = ({ title }) => {
  return (
    <Box
      align="start"
      direction="row"
      margin={{ vertical: 'xsmall' }}
      pad={{ horizontal: 'xsmall', vertical: 'xsmall' }}
    >
      <Box direction="column" justify="center" margin="none" pad="small">
        <Text weight="bold">{title}</Text>
      </Box>
    </Box>
  )
}

SidebarHeading.propTypes = {
  title: PropTypes.string.isRequired
}

export default SidebarHeading
