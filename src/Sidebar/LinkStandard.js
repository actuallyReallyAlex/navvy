import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Text } from 'grommet'
import LinkIndicator from './LinkIndicator'
import LinkIcon from './LinkIcon'

const LinkStandard = ({
  handler,
  icon,
  selected,
  setSelected,
  size,
  title
}) => {
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
        <Box
          align="center"
          direction="row"
          gap="small"
          justify={size === 'expanded' ? 'start' : 'center'}
          width={size === 'expanded' ? '100%' : '75%'}
        >
          <LinkIcon icon={icon} />
          {size === 'expanded' && <Text>{title}</Text>}
        </Box>
      </Box>
    </Button>
  )
}

LinkStandard.propTypes = {
  handler: PropTypes.func,
  icon: PropTypes.string,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['expanded', 'collapsed']).isRequired,
  title: PropTypes.string.isRequired
}

export default LinkStandard
