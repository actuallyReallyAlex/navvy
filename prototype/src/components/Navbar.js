import React from 'react'
import { Box } from 'grommet'
import NavbarExtender from './NavbarExtender'
import NavbarLogo from './NavbarLogo'
import NavbarSearch from './NavbarSearch'
import NavbarNotifications from './NavbarNotifications'
import NavbarUserMenu from './NavbarUserMenu'

const Navbar = () => {
  return (
    <Box
      align="center"
      className="navbar"
      direction="row"
      elevation="small"
      height="70px"
      justify="between"
      pad="small"
    >
      <NavbarExtender />
      <NavbarLogo />
      <Box
        align="center"
        direction="row"
        justify="end"
        pad={{ right: 'medium' }}
        width="33%"
      >
        <NavbarSearch />
        <NavbarNotifications />
        <NavbarUserMenu />
      </Box>
    </Box>
  )
}

export default Navbar
