import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native'

class InputBox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      borderColor: 'blackBorder'
    }
  }

  render () {
    return (
      <View style={[styles.container, styles[this.state.borderColor]]}>
        <TextInput
          multiline
          numberOfLines={4}
          style={{width: '100%', height: '100%'}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          underlineColorAndroid={'white'}
          onFocus={() => this.setState({borderColor: 'greenBorder'})}
          onBlur={() => {
            const { text } = this.state
            if (text) {
              this.props.translateText(text)
            }
            this.setState({borderColor: 'blackBorder'})}
          }
        />
      </View>
    )
  }
}

export default InputBox

const styles = StyleSheet.create({
  container: {
    flex: 0.33,
    width: '90%',
    backgroundColor: 'white',
    minHeight: 100,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1
  },
  blackBorder: {
    borderColor: 'black'
  },
  greenBorder: {
    borderColor: 'green'
  }
})
