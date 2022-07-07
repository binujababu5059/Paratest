import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class AboutUs extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>AboutUs </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"369"
    }
})