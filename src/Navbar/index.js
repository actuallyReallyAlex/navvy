import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from 'grommet'
import { Close, Expand, Next, Previous } from 'grommet-icons'
import Search from './Search'
import Notifications from './Notifications'
import UserMenu from './UserMenu'

const Navbar = ({ setSize, size }) => {
  const [fullScreen, setFullScreen] = useState(false)

  const sizeIcons = {
    expanded: <Previous />,
    collapsed: <Next />
  }

  const fullScreenIcons = {
    true: <Close />,
    false: <Expand />
  }

  const handleExpanderClick = () => {
    setSize(size === 'expanded' ? 'collapsed' : 'expanded')
  }

  const handleToggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
    setFullScreen(!fullScreen)
  }

  return (
    <Box
      direction="row"
      fill="horizontal"
      height="70px"
      justify="between"
      style={{ boxShadow: '0 4px 2px -2px gray' }}
    >
      <Box align="center" justify="center" pad={{ horizontal: 'medium' }}>
        <Button
          hoverIndicator
          icon={sizeIcons[size]}
          onClick={handleExpanderClick}
          plain
        />
      </Box>
      <Box align="center" justify="center">
        <Button
          hoverIndicator
          icon={fullScreenIcons[fullScreen]}
          onClick={handleToggleFullScreen}
          plain
        />
      </Box>
      <Box align="center" direction="row" width="55%">
        <Search />
      </Box>
      <Box
        align="center"
        direction="row"
        justify="end"
        pad={{ right: 'medium' }}
        width="33%"
      >
        <Notifications />
        <UserMenu />
      </Box>
    </Box>
  )
}

Navbar.propTypes = {
  setSize: PropTypes.func.isRequired,
  size: PropTypes.oneOf(['expanded', 'collapsed']).isRequired
}

export default Navbar
