import React, { useState } from 'react'
import { 
   View, 
   Text,
   Alert, 
   StyleSheet, 
   TextInput, 
   TouchableOpacity } from 'react-native'

// Menerima dua property : navigation , addNewRoutine
const AddItem = ({addNewRoutine}) => {

   const [title, setTitle] = useState('')
   const [year, setYear] = useState('')

   const changeTitle = text => setTitle(text)
   const changeYear = text => setYear(text)

   const addData = () => {
      // urutan penulisan title dan year saat memanggil addNewRoutine tidak boleh tertukar
      addNewRoutine(title, year)
      // akan mengkosongkan kedua text input
      setTitle('')
      setYear('')
   }
   
   return (
      <View>
         {/* 'value' akan menentukan apa yang akan tampil di textinput */}
         {/* itulah saat kita set ke string kosong pada state 'title' dan 'year' akan membuat textinput menjadi ikut kosong */}
         <TextInput value={title} placeholder="Title" onChangeText={changeTitle} />
         <TextInput value={year} placeholder="Year" onChangeText={changeYear} />
         <TouchableOpacity style={styles.btn} onPress={addData} >
            <Text style={styles.btnText} >New Routine</Text>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   btn: {
      backgroundColor: '#fabbbb',
      padding: 9,
      margin: 5
   },
   btnText : {
      color: '#E50914',
      fontSize : 20,
      textAlign: 'center'
   }
})

export default AddItem
