import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

const UserRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
)

UserRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.token
})

export default withRouter(connect(mapStateToProps, null)(UserRoute))
