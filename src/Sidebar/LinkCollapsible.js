import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Text } from 'grommet'
import { FormNext, FormDown } from 'grommet-icons'
import LinkIndicator from './LinkIndicator'
import LinkIcon from './LinkIcon'
import LinkCollapsibleChild from './LinkCollapsibleChild'

const LinkCollapsible = ({
  children,
  handler,
  icon,
  selected,
  setSelected,
  size,
  title
}) => {
  const [expanded, setExpanded] = useState(false)

  const handleClick = () => {
    setSelected(title)
    setExpanded(!expanded)
    handler && handler()
  }

  return (
    <Fragment>
      <Button hoverIndicator onClick={handleClick} plain>
        <Box
          background={expanded ? 'light-5' : undefined}
          direction="row"
          height="45px"
          margin={
            expanded
              ? { top: 'xsmall', bottom: 'none', left: 'xsmall' }
              : { vertical: 'xsmall', left: 'xsmall' }
          }
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
          <Box align="center" justify="center" pad={{ horizontal: 'small' }}>
            {expanded ? <FormDown /> : <FormNext />}
          </Box>
        </Box>
      </Button>
      {expanded &&
        children.map(({ handler, icon, title }, i) => (
          <LinkCollapsibleChild
            handler={handler}
            key={i}
            icon={icon}
            size={size}
            title={title}
          />
        ))}
    </Fragment>
  )
}

LinkCollapsible.propTypes = {
  children: PropTypes.array.isRequired,
  handler: PropTypes.func,
  icon: PropTypes.string,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['expanded', 'collapsed']).isRequired,
  title: PropTypes.string.isRequired
}

export default LinkCollapsible
