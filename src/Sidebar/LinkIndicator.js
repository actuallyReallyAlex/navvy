import React from 'react'
import { Box } from 'grommet'

const LinkIndicator = () => {
  return (
    <Box
      background="blue"
      round="large"
      width="5px"
      style={{
        position: 'absolute',
        left: '0',
        right: '5px',
        top: '5px',
        bottom: '5px'
      }}
    />
  )
}

export default LinkIndicator
