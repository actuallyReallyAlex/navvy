import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Text } from 'grommet'
import LinkIcon from './LinkIcon'

const LinkCollapsibleChild = ({ handler, icon, size, title }) => {
  const handleClick = () => {
    handler && handler()
  }

  return (
    <Button hoverIndicator onClick={handleClick} plain>
      <Box
        background="light-5"
        direction="row"
        height="45px"
        margin={{ vertical: 'none', left: 'medium' }}
        pad={{ vertical: 'none', left: 'small' }}
        style={{ position: 'relative' }}
        width="88%"
      >
        <Box
          align="center"
          direction="row"
          gap="small"
          justify="start"
          width="100%"
        >
          <LinkIcon icon={icon} />
          <Text>{title}</Text>
        </Box>
      </Box>
    </Button>
  )
}

LinkCollapsibleChild.propTypes = {
  handler: PropTypes.func,
  icon: PropTypes.string,
  size: PropTypes.oneOf(['expanded', 'collapsed']).isRequired,
  title: PropTypes.string.isRequired
}

export default LinkCollapsibleChild
