import React, { Component } from 'react'
import Drawer from 'react-native-drawer'
import SideMenu from './Menu'
import {Actions, DefaultRenderer} from 'react-native-router-flux'
import {StyleSheet} from 'react-native'

class SideDrawer extends Component {
  render () {
    const state = this.props.open;
    return (
      <Drawer
        ref="navigation"
        open={state.open}
        type="displace"
        content={<SideMenu />}
        tapToClose
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}>
      </Drawer>
    )
  }
}

const drawerStyles = StyleSheet.create({
  drawer: {
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 3
  },
  main: {
    paddingLeft: 3
  }
})

export default SideDrawer
