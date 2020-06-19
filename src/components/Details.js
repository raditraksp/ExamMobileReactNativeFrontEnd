import React, {useCallback, useState} from 'react'
import { useSelector }  from 'react-redux'
import { useFocusEffect } from '@react-navigation/native'
import { View, Image, Alert, ScrollView, TextInput, StyleSheet } from 'react-native'
import { 
   Container, Header, Content, Card, CardItem, List, ListItem,
   Thumbnail, Text, Button, Icon, Left, Body, Right, Lest
} from 'native-base';
import axios from '../config/api'
import {dim, btn, bg} from '../styles'

const Details = ({route, navigation}) => {
   
   const [film, setFilm] = useState({})

   useFocusEffect(
      useCallback(() => {
         axios.get(`/film/${route.params.id}`)
         .then(res => {
            setFilm(res.data)
         })
         .catch(err => console.log({err}))
      }, [])
   )

   const onEditFilm = () => {
      navigation.navigate("EditFilm", {id: film.id})
   }

   return (
      <Container>
         <ScrollView>
            <View style={{flex: 1}} >
               <Image
                  source={{uri : `http://localhost:2020/picture/${film.picture}?unq=${new Date()}` }}
                  style={{width: '100%', height: dim.fullHeight * 0.5}}
               />
               <View style={{marginHorizontal: 7}} >
                  <Text
                     style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10}}
                  >Title: {film.title} </Text>
                  <Text
                     style={{fontSize: 20, color: 'purple', fontWeight: 'bold', marginBottom: 10}}
                  >Year: {film.year} </Text>
                  <Text
                     style={{fontSize: 18, fontWeight: 'bold', marginBottom: 10}}
                  >Description: {film.description} </Text>
                  <Text
                     style={{fontSize: 16}}
                  >Director: {film.director} </Text>
               </View>
            </View>
         </ScrollView>
         <View style={{height: 40, flexDirection: 'row', justifyContent: 'space-around'}} >
            <Button block style={[btn, bg.purplesoft, {height: 25}]} onPress={onEditFilm} >
               <Text>Edit Film</Text>
            </Button>
         </View>
      </Container>
   )
}

const styles = StyleSheet.create({
   view : {
      flex:1, 
      alignItems: 'center', 
      justifyContent: 'center'
   }
})


export default Details
