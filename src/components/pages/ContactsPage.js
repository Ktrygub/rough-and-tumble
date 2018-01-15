import React from 'react'
import { Link } from 'react-router-dom'

const ContactsPage = () => (
      <div>
        <h1>Contacts</h1>
        
          <div>
            <Link to="/">Back</Link> or <Link to="/signup">Sign up</Link>
          </div>
        
      </div>
    )

    export default ContactsPage