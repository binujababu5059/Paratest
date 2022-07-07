import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Contact</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"369"
    }
})