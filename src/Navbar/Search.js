import React, { Fragment, useState } from 'react'
import { Box, TextInput } from 'grommet'
import { Search } from 'grommet-icons'

const NavbarSearch = () => {
  const [searchValue, setSearchValue] = useState('')
  const handleChange = e => setSearchValue(e.target.value)
  
  return (
    <Fragment>
      <Box margin={{ horizontal: 'small' }}>
        <Search />
      </Box>
      <Box align="center" direction="row" gap="small" width="50%">
        <TextInput
          margin
          onChange={handleChange}
          placeholder="Search..."
          plain
          size="small"
          value={searchValue}
        />
      </Box>
    </Fragment>
  )
}

export default NavbarSearch
