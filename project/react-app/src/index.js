import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import Profile from './components/Profile'
import rootReducer from './reducers'

import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
      <Route path="/profile" component={Profile} />
    </Router>
  </Provider>,
  document.getElementById('root')
)