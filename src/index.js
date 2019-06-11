import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grommet, grommet } from 'grommet'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

const Navvy = props => {
  const { sections } = props

  return (
    <Grommet full theme={grommet}>
      <Box direction="row" fill>
        <Sidebar sections={sections} />
        <Box fill>
          <Navbar />
          {props.children}
        </Box>
      </Box>
    </Grommet>
  )
}

Navvy.propTypes = {
  sections: PropTypes.array.isRequired
}

export default Navvy
