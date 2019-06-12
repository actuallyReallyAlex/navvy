import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import Logo from './Logo'
import Section from './Section'
import { Scrollbars } from 'react-custom-scrollbars'

const Sidebar = ({ background, logo, sections, size }) => {
  const firstLinkTitle = sections[0].links[0].title
  const [selected, setSelected] = useState(firstLinkTitle)

  const sizes = {
    expanded: '300px',
    collapsed: '100px'
  }

  return (
    <Box
      background={`${background}-3`}
      fill="vertical"
      style={{ transition: 'all 0.5s' }}
      width={sizes[size]}
    >
      <Logo logo={logo} size={size} />
      <Scrollbars autoHide>
        {sections.map(({ heading, links }) => (
          <Section
            heading={heading}
            key={heading}
            links={links}
            selected={selected}
            setSelected={setSelected}
            size={size}
          />
        ))}
      </Scrollbars>
    </Box>
  )
}

Sidebar.propTypes = {
  background: PropTypes.oneOf(['dark', 'light']),
  logo: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  sections: PropTypes.array.isRequired,
  size: PropTypes.oneOf(['expanded', 'collapsed']).isRequired
}

export default Sidebar
