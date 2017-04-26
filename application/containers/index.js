import React, { Component } from 'react'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import App from './App'

import appReducer from '../reducers/reducers'

let middleware = [
  thunk
]

if (__DEV__) {
  middleware = [
    ...middleware
  ]
}

const enhancer = compose(
  applyMiddleware(thunk),
  global.reduxNativeDevTools ? global.reduxNativeDevTools(/*options*/) : nope => nope,
)

const store = createStore(appReducer, enhancer)
if (global.reduxNativeDevTools) {
  global.reduxNativeDevTools.updateStore(store)
}

export default class AppContainer extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}