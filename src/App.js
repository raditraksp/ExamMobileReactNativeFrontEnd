import 'react-native-gesture-handler';
import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

// react navigation container
import { NavigationContainer } from '@react-navigation/native'

// react navigation stack
import { createStackNavigator } from '@react-navigation/stack'

// object stack
// Stack.Navigator digunakan untuk wrapping screen
// Stack.Screen digunakan untuk membuat alamat untuk tiap screen
const Stack = createStackNavigator()

// component
import Home from './components/Home';
import Details from './components/Details';

const App = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator
         // screenOptions akan berdampak ke semua screen
            screenOptions = {{
               title : 'N E R D F L I X',
               // menghilangkan tombol back
               headerLeft : null,
               // styling untuk text header
               headerTitleStyle: {
                  textAlign: 'center'
               }
            }}
         >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
   view: {
      backgroundColor: 'red'
   },
   text : {
      color: 'white'
   }
})

export default App