import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import LoginForm from '../forms/LoginForm'
import { login } from '../../redux/actions/auth'

class LoginPage extends React.Component {
  submit = data =>
    this.props.login(data).then(() => this.props.history.push('/contacts'))

  render() {
    return (
      <div>
        <h1>Login Page</h1>
        <LoginForm submit={this.submit} />
        <Link to="/">Back</Link> or {'link to forgot password'}
      </div>
    )
  }
}
LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
}

export default connect(null, { login })(LoginPage)
