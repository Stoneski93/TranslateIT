import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Picker,
  Text
} from 'react-native'

class Header extends Component {
  render () {
    return (
      <View style={styles.flags}>
        <Text style={{width: "90%"}}>
          Translate to:
        </Text>
        <Picker
          selectedValue={'java'}
          onValueChange={(lang) => this.setState({language: lang})}
          style={{backgroundColor: 'white', width: '90%'}}>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    )
  }
}

Header.propTypes = {

}

const styles = StyleSheet.create({
  flags: {
    flex: 0.25,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection:'row',
    alignItems:'center',
    flexWrap: 'wrap',
    justifyContent:'center',
    width: '100%',
    backgroundColor: '#81D4FA'
  }
})

export default Header
