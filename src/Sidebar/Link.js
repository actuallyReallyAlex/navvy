import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Text } from 'grommet'
import { Cube } from 'grommet-icons'
import LinkIndicator from './LinkIndicator'

const Link = ({ handler, selected, setSelected, title }) => {
  const handleClick = () => {
    setSelected(title)
    handler && handler()
  }

  return (
    <Button hoverIndicator onClick={handleClick} plain>
      <Box
        direction="row"
        fill="horizontal"
        height="45px"
        margin="xsmall"
        pad="small"
        style={{ position: 'relative' }}
      >
        {selected === title && <LinkIndicator />}
        <Box direction="row" gap="small">
          <Cube />
          <Text>{title}</Text>
        </Box>
      </Box>
    </Button>
  )
}

Link.propTypes = {
  handler: PropTypes.func,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

export default Link
