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
    // batchedSubscribe((notify) => {
    //   notify();
    // }),
  )

const store = createStore(appReducer, enhancer)
  // If you have other enhancers & middlewares
  // update the store after creating / changing to allow devTools to use them
if (global.reduxNativeDevTools) {
  global.reduxNativeDevTools.updateStore(store)
}


// Wrap App in Redux provider (makes Redux available to all sub-components)
export default class AppContainer extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}