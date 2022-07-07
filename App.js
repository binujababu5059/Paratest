import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'


import MyWeb from './src/TopTab/web'
import Login from './src/loginmain'
import AboutUs from './src/TopTab/aboutUs'
import Contact from './src/TopTab/contact'
import Home from './src/TopTab/home'


const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator()


function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name ="Login"
      component={Login} 
      options={{headerShown : false}} />
      <Stack.Screen name='MyWeb'
      component={MyWeb} 
      options={{headerShown : false}} />
      <Stack.Screen name='Tab'
      component={MyTab}
      options={{headerShown : false}} 
      />
    </Stack.Navigator>
  )
}
function MyTab(){
  return(
    <Tab.Navigator>
      <Tab.Screen
      name='Home'
      component={Home}
      />
      <Tab.Screen
      name='AboutUs'
      component={AboutUs}
      />
      <Tab.Screen
      name='Contact'
      component={Contact}
      />
      
    </Tab.Navigator>
  )

}
export default function App(){
  return(
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>

  )

};