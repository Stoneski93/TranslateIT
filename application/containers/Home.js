/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native'

import InputBox from '../components/InputBox'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.flags}>
          <Text>
            Flagi
          </Text>
        </View>
        <KeyboardAwareScrollView>
          <View style={styles.inputs}>
            <InputBox />
            <View style={{width: '80%', height: 35, backgroundColor: '#01579B', borderRadius: 10}} />
            <InputBox />
          </View>
          <View style={styles.footer}>
            <View style={{width: '80%', height: 35, backgroundColor: 'white', borderRadius: 10}}>
              <TextInput
                multiline
                numberOfLines={4}
                style={{width: '100%', height: '100%'}}
                onChangeText={() => {}}
                value={'value'}
              />
            </View>
            <View style={{width: '80%', height: 35, backgroundColor: 'green', borderRadius: 10}} />
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E1F5FE',
    paddingTop: 50,
    paddingBottom: 30

  },
  flags: {
    height: 60,
    width: '100%',
    backgroundColor: '#81D4FA'
  },
  inputs: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 10
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  }
})

AppRegistry.registerComponent('TranslateIT', () => TranslateIT)
