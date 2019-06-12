import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Grommet, grommet } from 'grommet'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Navvy = props => {
  const { background, sections } = props
  const [size, setSize] = useState('expanded') // or 'collapsed'

  return (
    <Grommet full theme={grommet}>
      <Box direction="row" fill>
        <Sidebar background={background} sections={sections} size={size} />
        <Box fill>
          <Navbar setSize={setSize} size={size} />
          {props.children}
        </Box>
      </Box>
    </Grommet>
  )
}

Navvy.propTypes = {
  background: PropTypes.oneOf(['dark', 'light']),
  sections: PropTypes.array.isRequired
}

Navvy.defaultProps = {
  background: 'light'
}

export default Navvy
