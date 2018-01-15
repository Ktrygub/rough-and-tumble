import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => (
      <div>
        <h1>Login</h1>
        
          <div>
            <Link to="/">Back</Link> or <Link to="/signup">Sign up</Link>
          </div>
        
      </div>
    )

    export default LoginPage