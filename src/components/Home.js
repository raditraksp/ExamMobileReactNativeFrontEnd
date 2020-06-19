import React, {useState, useCallback} from 'react'
import { View, Text, Button, Alert, FlatList, TouchableOpacity } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import axios from '../config/api'
import shortid from 'shortid'

import AddItem from './AddItem'
import ListItem from './ListItem'

// object navigation memiliki method navigate untuk pindah ke screen lain
const Home = ({ navigation }) => {

   const [films, setFilms] = useState([])

   useFocusEffect(
      useCallback(() => {
         getData()
      }, []) 
   )

   const getData = () => {
      axios.get(`/films`)
            .then(res => setFilms(res.data))
            .catch(err => console.log({err}))
   }
   
   const addNewRoutine = (title, year) => {
      if(!title || !year) return Alert.alert("Error", "Please complete your data")
      
      const data = { title, year }
      axios.post('/films', data)
          .then(res => getData())
          .catch(err => console.log({err}))
      setFilms([...films, data])

   }      

   const deleteRoutine = (id) => {
      console.log(id)
      axios.delete(`/film/${id}`)
      .then(res => getData())
      .catch(err => console.log({err}))
   }

   return (
      <View>
         <AddItem addNewRoutine={addNewRoutine} />
         <FlatList
            // films = [ {id, title, year}, {}, {} ]
            data={films}
            // item = {id, title, year}
            renderItem={({item}) =>  <ListItem deleteRoutine={deleteRoutine} film={item} /> }
            // setiap list harus memiliki key, dimana valuenya unique dan bertipe data string
            keyExtractor={films.id}
         />
      </View>
   )
}

export default Home

// jika pada react.js kita bisa memilih variable untuk function di dalam map
// const renderList = () => {
//    items.map(film => {return <li key={film.id} >{film.title}</li>})
// }

// pada react native, best practice kita akan selalu menggunakan {item}
// const renderListReactNative = () => {
//    items.map(
//       ({item})=> {return <li>{item.title}</li>}
//    )
// }