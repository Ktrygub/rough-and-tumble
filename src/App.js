import React from 'react'
// import PropTypes from 'prop-types'
import { Route, Switch, BrowserRouter } from 'react-router-dom'

import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import SignupPage from './components/pages/SignupPage'
import ContactsPage from './components/pages/ContactsPage'

import GuestRoute from './components/routes/GuestRoute'
import UserRoute from './components/routes/UserRoute'

const App = () => (
  <div className="ui container">
    <header className="App-header">
      <h1 className="App-title">Rough&Tumble</h1>
    </header>

    <BrowserRouter basename="/">
      <Switch>
        <Route path="/" exact component={HomePage} />
        <UserRoute path="/contacts" exact component={ContactsPage} />
        <GuestRoute path="/login" exact component={LoginPage} />
        <GuestRoute path="/signup" exact component={SignupPage} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App
