import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// tab navigator
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const MainTab = createBottomTabNavigator()

// screens
import Home from '../components/Home'
import Details from '../components/Details'

// react navigation stack
import { createStackNavigator } from '@react-navigation/stack'
// object stack
// Stack.Navigator digunakan untuk wrapping screen
// Stack.Screen digunakan untuk membuat alamat untuk tiap screen
const Stack = createStackNavigator()


const MainRouter = () => {
   return (
      // container screen
      // show label false untuk menghilangkan tulisan pada tab, tersisa hanya icon saja.
      <Stack.Navigator
         // screenOptions akan berdampak ke semua screen
            screenOptions = {{
               // tulisan pada header
               title : 'N E R D F L I X',
               // menghilangkan tombol back
               headerLeft : null,
               // styling untuk text header
               headerTitleStyle: {
                  // text rata tengah
                  textAlign: 'center',
                  // mengganti jenis font
                  fontFamily: 'BebasNeue-Regular',
                  // ukuran text
                  fontSize: 30,
                  // warna text
                  color: 'white'
               },
               headerStyle: {
                  // background header
                  backgroundColor: '#E50914'
               }
            }}
         >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Details" component={Details} />
         </Stack.Navigator>
   )
}

export default MainRouter