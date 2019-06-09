import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'grommet'
import Header from './Header'
import Link from './Link'

const Section = ({ heading, links }) => {
  return (
    <Box margin={{ vertical: 'small' }} pad="small">
      <Header heading={heading} />
      {links.map(({ title }) => (
        <Link title={title} />
      ))}
    </Box>
  )
}

Section.propTypes = {
  heading: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default Section
