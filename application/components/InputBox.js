import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  TextInput
} from 'react-native'

class InputBox extends Component {
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }

  render () {
    return (
      <View style={styles.container}>
        <TextInput
          multiline
          numberOfLines={4}
          style={{width: '100%', height: '100%'}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    )
  }
}

InputBox.propTypes = {

}

export default InputBox

const styles = StyleSheet.create({
  container: {
    flex: 0.33,
    width: '80%',
    backgroundColor: 'white',
    height: 100,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10
  }
})
