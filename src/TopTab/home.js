import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texts}>hi {this.props.route.params.name} </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#369",
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    texts:{
      color:"#fff",
      fontSize:40
    }

})