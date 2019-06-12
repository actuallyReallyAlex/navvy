import React from 'react'
import PropTypes from 'prop-types'
import * as grommetIcons from 'grommet-icons'

const LinkIcon = ({ icon }) => {
  const Icon = grommetIcons[icon]
  return <Icon />
}

LinkIcon.propTypes = {
  icon: PropTypes.string.isRequired
}

export default LinkIcon
