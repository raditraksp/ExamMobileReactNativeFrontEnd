import { StyleSheet, Dimensions } from 'react-native'


export const dim = {
   fullWidth : Dimensions.get('window').width,
   fullHeight : Dimensions.get('window').height
}

export const btn = StyleSheet.create({
   padding: 9,
   margin: 5,
   borderRadius: 5
})

export const bg = StyleSheet.create({
   purple: {
      backgroundColor: "purple"
   },
   purplesoft: {
      backgroundColor: "#cb85fc"
   }
})

export const txtColor = StyleSheet.create({
   white: {
      color: 'white'
   },
   black : {
      color: "black"
   }
})

export const sign= StyleSheet.create({
   link : {
      marginTop: 5,
      fontSize: 17,
      color: 'blue',
      textAlign: 'center'
   },
   title: {
      marginTop: 35,
      fontSize: 25,
      textAlign: 'center'
   }
})

export const m = StyleSheet.create({
   five: {
      margin: 5
   },
   ten : {
      margin: 10
   },
   fiftn : {
      margin : 15
   },
   twenty : {
      margin : 20
   }
})