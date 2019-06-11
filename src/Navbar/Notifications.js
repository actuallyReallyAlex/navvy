import React from 'react'
import { Box, Menu, Text } from 'grommet'
import { MailOption, Notification, Server } from 'grommet-icons'
import { useHover } from '../hooks/useHover'

const NavbarNotifications = () => {
  const [hoverRef, notificationIsHovered] = useHover()

  return (
    <Box margin={{ horizontal: 'small' }} ref={hoverRef}>
      <Menu
        dropAlign={{ top: 'bottom', right: 'right' }}
        icon={
          <Notification color={notificationIsHovered ? 'dark-2' : 'dark-6'} />
        }
        items={[
          {
            label: (
              <Box direction="row" gap="small" pad="small">
                <MailOption />
                <Text>You have 6 new messages</Text>
              </Box>
            ),
            onClick: () => {}
          },
          {
            label: (
              <Box direction="row" gap="small" pad="small">
                <Server />
                <Text>Server rebooted</Text>
              </Box>
            ),
            onClick: () => {}
          },
          {
            label: (
              <Box border="top" direction="row" pad="small">
                <Text className="spaced-text" size="small" weight="bold">
                  VIEW ALL NOTIFICATIONS
                </Text>
              </Box>
            )
          }
        ]}
      />
    </Box>
  )
}

export default NavbarNotifications
