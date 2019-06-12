import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'grommet'

const Header = ({ heading, size }) => {
  return (
    <Text
      margin={{ horizontal: 'small', top: 'medium' }}
      size="small"
      style={{ textAlign: size === 'expanded' ? 'start' : 'center' }}
    >
      {heading}
    </Text>
  )
}

Header.propTypes = {
  heading: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['expanded', 'collapsed']).isRequired
}

export default Header
