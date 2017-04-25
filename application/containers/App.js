import React, { Component } from 'react'
import {
  StyleSheet
} from 'react-native'

import { connect, Provider } from 'react-redux'

// COMPONENTS
import SideDrawer from '../components/Drawer'
import Home from './Home'

// Add with React Native Router
import { Router, Scene, Actions } from 'react-native-router-flux'

import AppStyles from '../styles'
import AppConfig from '../config'

const RouterWithRedux = connect()(Router)
import reducers from '../reducers/reducers'

class App extends Component {
  render () {
    return (
      <RouterWithRedux
        navigationBarStyle={styles.navigationBarStyle}
        leftButtonStyle={styles.leftButtonStyle}
        leftButtonIconStyle={styles.barButtonIconStyle}>
        <Scene key='drawer' component={SideDrawer} open={false} >
          <Scene
            key='first'
            tabs>
            <Scene
              key='home'
              component={Home}
              initial
              hideNavBar={false} />
          </Scene>
        </Scene>
      </RouterWithRedux>
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
