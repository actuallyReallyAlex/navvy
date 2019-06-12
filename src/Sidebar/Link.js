import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Text } from 'grommet'
import LinkIndicator from './LinkIndicator'
import LinkIcon from './LinkIcon'

const Link = ({ handler, icon, selected, setSelected, title }) => {
  const handleClick = () => {
    setSelected(title)
    handler && handler()
  }

  return (
    <Button hoverIndicator onClick={handleClick} plain>
      <Box
        direction="row"
        height="45px"
        margin={{ vertical: 'xsmall', left: 'xsmall' }}
        pad={{ vertical: 'small', left: 'small' }}
        style={{ position: 'relative' }}
        width="95%"
      >
        {selected === title && <LinkIndicator />}
        <Box direction="row" gap="small">
          <LinkIcon icon={icon} />
          <Text>{title}</Text>
        </Box>
      </Box>
    </Button>
  )
}

Link.propTypes = {
  handler: PropTypes.func,
  icon: PropTypes.string,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
}

Link.defaultProps = {
  icon: 'FormSubtract'
}

export default Link
