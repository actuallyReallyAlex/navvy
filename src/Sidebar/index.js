import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import Logo from './Logo'
import Section from './Section'

const Sidebar = ({ sections }) => {
  const firstLinkTitle = sections[0].links[0].title
  const [selected, setSelected] = useState(firstLinkTitle)

  return (
    <Box fill="vertical" width="300px">
      <Logo />
      <Box style={{ display: 'block' }} fill>
        {sections.map(({ heading, links }) => (
          <Section
            heading={heading}
            key={heading}
            links={links}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </Box>
    </Box>
  )
}

Sidebar.propTypes = {
  sections: PropTypes.array.isRequired
}

export default Sidebar
