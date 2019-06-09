import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading } from 'grommet'
import Logo from './Logo'
import Section from './Section'

const Sidebar = ({ sections }) => {
  return (
    <Box fill="vertical" width="300px">
      <Logo />
      <Box fill>
        {sections.map(({ heading, links }) => (
          <Section heading={heading} links={links} />
        ))}
      </Box>
    </Box>
  )
}

Sidebar.propTypes = {
  sections: PropTypes.array.isRequired
}

export default Sidebar
