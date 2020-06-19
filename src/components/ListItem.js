import React from 'react'
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native'
import { NavigationContainer, useNavigation } from '@react-navigation/native'

const ListItem = ({film, deleteRoutine}) => {
   // film = {id, title, year}
   
   const navigation = useNavigation()
   const onPressList = () => {
      // berpindah screen dengan membawa sebuah data (object)
      // data akan diakses di object route
      navigation.navigate('Details', {id: film.id})
   }

   return (
      <TouchableOpacity onPress={onPressList} style={styles.listItem} >
         <View style={styles.listItemView} >
            <View>
               <Text style={styles.listTitle}>{film.title}</Text>
               <Text style={styles.listYear}>{film.year}</Text>
            </View>
            <Button title="finish" color="red" onPress={ () => deleteRoutine(film.id) } />
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   listItem : {
      padding: 15,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderColor: '#eee'
   },
   listItemView: {
      // untuk mengatur arah susunan child dari <View>
      // default nilainya adalah 'column' , sehingga child akan tersusun dari atas ke bawah (vertikal)
      // untuk nilai 'row' akan membuat child tersusun dari kiri ke kanan (horizontal)
      flexDirection : 'row',
      // untuk memberikan jarak antar child
      justifyContent: 'space-between',
      alignItems: 'center'
   },
   listTitle: {
      fontSize: 18
   },
   listYear: {
      fontSize: 14
   }
})


export default ListItem
