import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'grommet'

const Header = ({ heading }) => {
  return (
    <Text margin={{ horizontal: 'small', top: 'medium' }} size="small">
      {heading}
    </Text>
  )
}

Header.propTypes = {
  heading: PropTypes.string.isRequired
}

export default Header
