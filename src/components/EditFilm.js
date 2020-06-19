import React, {useSstate, useState, useCallback} from 'react'
import { useSelector } from 'react-redux'
import { View, Image, StyleSheet} from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import {  Container, Header, Content, Form, Item, Input, Label, Button, Text} from 'native-base'
import ImagePicker from 'react-native-image-picker';
import axios from '../config/api'
import { btn, bg } from '../styles'
 
export default function EditFilm({route}) {
 
   const [source, setSource] = useState(null)
   // film = {name: "Rochafi Alvin" email: "rochafi@gmail.com"}
   const [film, setFilm] = useState({})
//    const token = useSelector(state => state.auth.token)
   const [picturelink, setpicturelink] = useState(null)
 
   const onChangeTitle = (text) => { setFilm((prevFilm) => {return {...prevFilm, title: text}}) }
   const onChangeYear = (text) => { setFilm((prevFilm) => {return {...prevFilm, year: text}}) }
   const onChangeDirector = (text) => { setFilm((prevFilm) => {return {...prevFilm, director: text}}) }
   const onChangeDescription = (text) => { setFilm((prevFilm) => {return {...prevFilm, description: text}}) }
 
   useFocusEffect(
      useCallback(() => {
         axios.get(`/film/${route.params.id}`)
            .then(res => {
               // res.data = {film, picturelink}
               setFilm(res.data)
               setpicturelink(`${res.data.picturelink}?unq=${new Date()}`)
            })
            .catch(err =>console.log({err}))
      }, [])
   )
 
 
   const options = {
      title: 'Choose picture'
   };
 
   // memilih gambar dari camera atau gallery
   const onChooseImage = () => {
      ImagePicker.showImagePicker(options, (response) => {
         console.log({response});
     
         if (response.didCancel) {
            console.log('film cancelled image picker');
         } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
         } else if (response.customButton) {
            console.log('film tapped custom button: ', response.customButton);
         } else {
            const source = { uri: response.uri, type:response.type, name: response.fileName };
            setSource(source)
         }
      });
   }
 
   // menyimpan gambar ke database
   const onSaveImage = () => {
      const data = new FormData()
 
      data.append("picture", source)
 
      axios.post('/film/picture', data)
      .then(res => console.log({res}))
      .catch(err => console.log({err}))
   }
 
   // menyimpan data (name, email, password)
   const onSaveData = () => {
 
      const data = {title: film.title, year: film.year, description: film.description, director: film.director}
      axios.patch('/filmupdate', data)
         .then(res => console.log({res}))
         .catch(err => console.log({err}))
   }
 
   return (
      <Container>
        <Content>
            {/* Image */}
            <View style={styles.photo} >
               {
                  source ?
                  <Image style={styles.image} source={source} /> :
                  <Image style={styles.image} source={{uri: picturelink}} />
               }
            </View>
 
            {/* Button choose dan save */}
            <View style={styles.buttons} >
               <Button style={[styles.btn,bg.purplesoft]} onPress={onChooseImage} >
                  <Text style={styles.btnText}>Choose</Text>
               </Button>
               <Button style={[styles.btn,bg.purplesoft]} onPress={onSaveImage} >
                  <Text style={styles.btnText}>Save</Text>
               </Button>
            </View>
 
            {/* Ini Form */}
            <Form>
               <Item stackedLabel>
                  <Label>Title</Label>
                  <Input value={film.title} onChangeText={onChangeTitle}  />
               </Item>
               <Item stackedLabel>
                  <Label>Year</Label>
                  <Input value={film.year} onChangeText={onChangeYear}  />
               </Item>
               <Item stackedLabel>
                  <Label>Director</Label>
                  <Input value={film.director} onChangeText={onChangeDirector}  />
               </Item>
               <Item stackedLabel>
                  <Label>Description</Label>
                  <Input value={film.description} onChangeText={onChangeDescription}  />
               </Item>
         
            </Form>
            {/* Button Save */}
            <Button style={[styles.btn, bg.purplesoft, {alignSelf: 'center', marginTop: 20}]}  onPress={onSaveData} >
               <Text style={styles.btnText} >Save</Text>
            </Button>
 
         </Content>
      </Container>
   )
}
 
const styles = StyleSheet.create({
   photo : {
      width: 100,
      height: 100 ,
      borderWidth: 1,
      margin: 10,
      borderRadius: 100,
      alignSelf: 'center'
   },
   image : {
      width: '100%',
      height: '100%',
      borderRadius: 100
   },
   buttons: {
      alignSelf: 'center',
      width: '60%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20
   },
   btn : {
      width: '45%',
      height: 30,
      borderRadius: 5,
   },
   btnText : {
      width: '100%',
      textAlign: 'center'
   }
})