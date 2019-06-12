import React from 'react'
import PropTypes from 'prop-types'
import LinkStandard from './LinkStandard'
import LinkCollapsible from './LinkCollapsible'

const Link = ({
  collapsible = false,
  children,
  handler,
  icon,
  selected,
  setSelected,
  size,
  title
}) => {
  if (collapsible) {
    return (
      <LinkCollapsible
        collapsible={collapsible}
        children={children}
        handler={handler}
        icon={icon}
        selected={selected}
        setSelected={setSelected}
        size={size}
        title={title}
      />
    )
  } else {
    return (
      <LinkStandard
        collapsible={collapsible}
        handler={handler}
        icon={icon}
        selected={selected}
        setSelected={setSelected}
        size={size}
        title={title}
      />
    )
  }
}

Link.propTypes = {
  children: PropTypes.array,
  collapsible: PropTypes.bool,
  handler: PropTypes.func,
  icon: PropTypes.string,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['expanded', 'collapsed']).isRequired,
  title: PropTypes.string.isRequired
}

Link.defaultProps = {
  collapsible: false,
  icon: 'FormSubtract'
}

export default Link
