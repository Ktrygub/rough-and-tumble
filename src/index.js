import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import App from './App'
import rootReducer from './redux/reducers/rootReducer'
import registerServiceWorker from './registerServiceWorker'
import { userLoggedIn } from './redux/actions/auth'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

if (localStorage.RnT_JWT) {
  const user = JSON.parse(localStorage.RnT_JWT)
  store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
