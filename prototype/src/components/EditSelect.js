import React from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Select, Text } from 'grommet'
import { Close, Edit } from 'grommet-icons'

const EditSelect = ({
  buttonClickHandler,
  options,
  selectChangeHandler,
  selectValue,
  title,
  trigger
}) => {
  return (
    <Box direction="row" justify="stretch" fill="horizontal" gap="small">
      {trigger ? (
        <Select
          onChange={selectChangeHandler}
          options={options}
          size="xsmall"
          value={selectValue}
        />
      ) : (
        <Text>{title}</Text>
      )}
      <Button
        icon={
          trigger ? (
            <Close className="edit-icon" />
          ) : (
            <Edit className="edit-icon" />
          )
        }
        onClick={buttonClickHandler}
        plain
      />
    </Box>
  )
}

EditSelect.propTypes = {
  buttonClickHandler: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  selectChangeHandler: PropTypes.func.isRequired,
  selectValue: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  trigger: PropTypes.bool.isRequired
}

export default EditSelect
