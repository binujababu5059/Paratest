import { Text, View , TextInput , StyleSheet , TouchableHighlight} from 'react-native'
import React , {useState} from 'react'


function Content(props){
    return(
        <View>
            <Text style={{color:"white"}}>
                hi my name is {props.name}
            </Text>
        </View>
    )
}
function App() {
  const [text , setText] =useState('hii')

  
  return (
    <View style={styles.container}>
        <Text style={styles.text}>
         {text}
        </Text>
        <TouchableHighlight 
        onPress={ ()=> setText("bye")}
        style={styles.button}>
          <Text>
            change
          </Text>

        </TouchableHighlight>
        <Content name="sree">
            
        </Content>
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
button:{
  marginTop: 40,
  width: "60%",
  height: 50,
  backgroundColor: "white",
  alignItems: 'center',
  justifyContent: 'center',
  
}

})
export default App;