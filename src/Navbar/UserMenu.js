import React from 'react'
import { Box, Image, Menu, Text } from 'grommet'

const NavbarUserMenu = () => {
  return (
    <Menu
      dropAlign={{ top: 'bottom', right: 'right' }}
      icon={
        <Box
          align="center"
          height="45px"
          justify="center"
          margin="small"
          round="full"
          width="45px"
        >
          <Image
            fit="cover"
            height="45px"
            src="https://v2.grommet.io/assets/Wilderpeople_Ricky.jpg"
            style={{ borderRadius: '100%' }}
            width="45px"
          />
        </Box>
      }
      items={[
        {
          label: (
            <Box justify="center" pad="small" width="200px">
              <Text className="spaced-text" weight="bold">
                ALEX LEE
              </Text>
              <Text size="small">Web Developer</Text>
            </Box>
          )
        },
        { label: 'Settings', onClick: () => {} },
        { label: 'Activity Log', onClick: () => {} },
        { label: 'Logout', onClick: () => {} }
      ]}
    />
  )
}

export default NavbarUserMenu
