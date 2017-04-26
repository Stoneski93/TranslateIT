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
import { connect } from 'react-redux'

import InputBox from '../components/InputBox'
import Header from './Header'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { translate } from '../actions/dictionary'

class Home extends Component {
  constructor (props) {
    super(props)
    this.translateText = this.translateText.bind(this)
  }

  translateText (text) {
    this.props.translate(text)
  }

  render () {
    const { translatedText } = this.props
    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView>
          <Header />
          { translatedText
            ? (<View style={styles.textContent}>
              <Text style={{color: "white"}}>
                {translatedText}
              </Text>
            </View>)
            : null
          }
          <View style={styles.inputs}>
            <InputBox
              translateText={this.translateText} />
          </View>
          <View style={styles.footer}>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    translatedText: state.dictionary.translatedText
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#E1F5FE'

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
    flex: 0.25,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  textContent: {
    backgroundColor: 'black',
    minHeight: 50,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export default connect(mapStateToProps, {translate})(Home)
