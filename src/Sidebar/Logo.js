import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text } from 'grommet'
import { Dashboard } from 'grommet-icons'

const Logo = ({ logo, size }) => {
  const types = {
    string: (
      <Text margin="none" pad="none" weight="bold">
        {logo}
      </Text>
    ),
    object: logo
  }

  return (
    <Box
      align="center"
      justify="center"
      height="70px"
      style={{ boxShadow: '0 4px 2px -2px gray', minHeight: '70px' }}
    >
      {size === 'expanded' ? types[typeof logo] : <Dashboard />}
    </Box>
  )
}

Logo.propTypes = {
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  size: PropTypes.oneOf(['expanded', 'collapsed']).isRequired
}

export default Logo
