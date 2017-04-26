import React, { Component } from 'react'
import {
  StyleSheet
} from 'react-native'

import { connect, Provider } from 'react-redux'

// COMPONENTS
import Home from './Home'

import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';


class App extends Component {
  render () {
    return (
      <ScrollableTabView renderTabBar={() => <ScrollableTabBar />} >
        <Home tabLabel='Translator' />
        <Home tabLabel='Dictionary' />
      </ScrollableTabView>
    )
  }
}

export default App

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: '#03A9F4',
    color: 'white'
  },
  barButtonIconStyle: {
    tintColor: 'blue',
    width: 18
  },
  customActionBar: {
    position: 'absolute',
    bottom: 0
  }
})
