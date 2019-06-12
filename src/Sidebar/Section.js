import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import Header from './Header'
import Link from './Link'

const Section = ({ heading, links, selected, setSelected, size }) => {
  return (
    <Box margin={{ vertical: 'small' }} pad={{ vertical: 'small' }}>
      <Header heading={heading} size={size} />
      {links.map(({ collapsible, children, handler, icon, title }, i) => (
        <Link
          collapsible={collapsible}
          children={children}
          handler={handler}
          icon={icon}
          key={i}
          selected={selected}
          setSelected={setSelected}
          size={size}
          title={title}
        />
      ))}
    </Box>
  )
}

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  setSelected: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['expanded', 'collapsed'])
}

export default Section
