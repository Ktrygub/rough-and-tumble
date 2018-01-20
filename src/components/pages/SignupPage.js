import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SignupForm from '../forms/SignupForm'
import { signup } from '../../redux/actions/auth'

class SignupPage extends React.Component {
  submit = data =>
    this.props.signup(data).then(() => this.props.history.push('/contacts'))

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <SignupForm submit={this.submit} />
        <Link to="/">Back</Link> or <Link to="/login">Login</Link>
      </div>
    )
  }
}
SignupPage.propTypes = {
  signup: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired
}

export default connect(null, { signup })(SignupPage)
