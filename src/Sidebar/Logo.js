import React from 'react'
import { Box, Text } from 'grommet'

const Logo = () => {
  return (
    <Box
      align="center"
      justify="center"
      height="70px"
      style={{ boxShadow: '0 4px 2px -2px gray', minHeight: '70px' }}
    >
      <Text weight="bold" margin="none" pad="none">
        D A S H B O A R D
      </Text>
    </Box>
  )
}

export default Logo
