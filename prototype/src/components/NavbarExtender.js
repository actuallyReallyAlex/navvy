import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'grommet'
import { More } from 'grommet-icons'
import { setSidebarExpanded } from '../redux/actions/ui'
import { connect } from 'react-redux'

const NavbarExtender = ({ dispatch, ui }) => {
  return (
    <Button
      icon={<More />}
      onClick={() => dispatch(setSidebarExpanded(!ui.isSidebarExpanded))}
    />
  )
}

NavbarExtender.propTypes = {
  dispatch: PropTypes.func.isRequired,
  ui: PropTypes.object.isRequired
}

const mapStateToProps = ({ ui }) => ({ ui })

export default connect(mapStateToProps)(NavbarExtender)
