import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import VerifyEmailMessage from '../messages/VerifyEmailMessage'

const ContactsPage = ({ isVerified }) => (
  <div>
    <h1>Contacts</h1>
    {!isVerified && <VerifyEmailMessage />}
    <div>
      <Link to="/">Back</Link> or <Link to="/signup">Sign up</Link>
    </div>
  </div>
)
ContactsPage.propTypes = {
  isVerified: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isVerified: state.user.isVerified
})
export default connect(mapStateToProps, null)(ContactsPage)
