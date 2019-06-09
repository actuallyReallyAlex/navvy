import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Text } from 'grommet'
import { Cube } from 'grommet-icons'

const Link = ({ title }) => {
  return (
    <Button hoverIndicator plain>
      <Box
        direction="row"
        fill="horizontal"
        gap="small"
        height="45px"
        margin="xsmall"
        pad="small"
      >
        <Cube />
        <Text>{title}</Text>
      </Box>
    </Button>
  )
}

Link.propTypes = {
  title: PropTypes.string.isRequired
}

export default Link
