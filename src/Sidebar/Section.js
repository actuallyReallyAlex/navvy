import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import Header from './Header'
import Link from './Link'

const Section = ({ heading, links, selected, setSelected }) => {
  return (
    <Box margin={{ vertical: 'small' }} pad={{ vertical: 'small' }}>
      <Header heading={heading} />
      {links.map(({ handler, title }, i) => (
        <Link
          handler={handler}
          key={i}
          selected={selected}
          setSelected={setSelected}
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
  setSelected: PropTypes.func.isRequired
}

export default Section
