import { Text, View , TextInput , StyleSheet , TouchableHighlight} from 'react-native'
import React , {useState} from 'react'


export default function Login({navigation}){
  const [name , setName] = useState()
  
  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
          hi
        </Text>
        
        <TextInput
        placeholder='username'
        onChangeText={(username)=> setName(username)}
        style={styles.Input}>

        </TextInput>
        <Text style={styles.text2}>name:{name}</Text>
        <TextInput
        placeholder='password'
        style={styles.Input}>

        </TextInput>
        <TouchableHighlight 
        style={styles.button}
        onPress={() => navigation.navigate('Tab' ,{screen:'Home', params : {name}})}
        >
          <Text style={styles.text2}>
            Login
          </Text>

        </TouchableHighlight>
        
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor: "#000",
    alignItems: 'center',
    justifyContent: 'center',        
},
text:{
  color:"white",
  fontSize:40
},
text2:{
  color:"white",
  fontSize:15,
  fontWeight:'bold'
},  
button:{
  marginTop: 40,
  width: "60%",
  height: 50,
  backgroundColor: "green",
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius:5,
  
},
Input :{
  width: "60%",
  height: 50,
  backgroundColor:"white",
  marginTop: 20,
  borderRadius:5,
  paddingLeft:10
  
}

})
