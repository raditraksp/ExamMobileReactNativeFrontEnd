import 'react-native-gesture-handler';
import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

// react navigation container
import { NavigationContainer } from '@react-navigation/native'

// Redux
import { Provider } from 'react-redux';
import store from './redux'

// Router
import MainRouter from './router/MainRouter';
// import AuthRouter from './router/AuthRouter';

// react navigation stack
// import { createStackNavigator } from '@react-navigation/stack'

// object stack
// Stack.Navigator digunakan untuk wrapping screen
// Stack.Screen digunakan untuk membuat alamat untuk tiap screen
// const Stack = createStackNavigator()

// component
// import Home from './components/Home';
// import Details from './components/Details';

const App = () => {
   return (
      <Provider store={store} >
         <NavigationContainer>
            <MainRouter/>
         </NavigationContainer>
      </Provider>
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