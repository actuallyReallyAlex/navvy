import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import Logo from './Logo'
import Section from './Section'
import { Scrollbars } from 'react-custom-scrollbars'

const Sidebar = ({ sections }) => {
  const firstLinkTitle = sections[0].links[0].title
  const [selected, setSelected] = useState(firstLinkTitle)

  return (
    <Box background="light-3" fill="vertical" width="300px">
      <Logo />
      <Scrollbars autoHide>
        {sections.map(({ heading, links }) => (
          <Section
            heading={heading}
            key={heading}
            links={links}
            selected={selected}
            setSelected={setSelected}
          />
        ))}
      </Scrollbars>
    </Box>
  )
}

Sidebar.propTypes = {
  sections: PropTypes.array.isRequired
}

export default Sidebar
