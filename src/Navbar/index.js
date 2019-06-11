import React from 'react'
import { Box } from 'grommet'
import Search from './Search'
import Notifications from './Notifications'
import UserMenu from './UserMenu'

const Navbar = () => {
  return (
    <Box
      direction="row"
      fill="horizontal"
      height="70px"
      justify="between"
      style={{ boxShadow: '0 4px 2px -2px gray' }}
    >
      <Box align="center" direction="row">
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

export default Navbar
