import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import { Dashboard } from 'grommet-icons'

const Logo = ({ size }) => {
  return (
    <Box
      align="center"
      justify="center"
      height="70px"
      style={{ boxShadow: '0 4px 2px -2px gray', minHeight: '70px' }}
    >
      {size === 'expanded' ? (
        <Text weight="bold" margin="none" pad="none">
          D A S H B O A R D
        </Text>
      ) : (
        <Dashboard />
      )}
    </Box>
  )
}

Logo.propTypes = {
  size: PropTypes.oneOf(['expanded', 'collapsed']).isRequired
}

export default Logo
