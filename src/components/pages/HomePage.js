import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../redux/actions/auth'

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>Home Page</h1>

    {isAuthenticated ? (
      <div>
        <h1 style={{ color: 'red' }}>LOGGED IN</h1>
        <button onClick={logout}>Logout</button>
      </div>
    ) : (
      <div>
        <Link to="/login">Login</Link> or <Link to="/signup">Sign up</Link>
      </div>
    )}

    <div>
      <br />
      <Link to="/contacts">Contacts</Link>
    </div>
  </div>
)
HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.user.token
})

export default connect(mapStateToProps, { logout })(HomePage)
