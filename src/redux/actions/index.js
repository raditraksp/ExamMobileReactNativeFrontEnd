import AsyncStorage from '@react-native-community/async-storage';

export const login = (data) => {
   // save to storage
   // tidak perlu menunggu, dan tidak membutuhkan responnya, jadi tidak menggunakan .then / async await
   AsyncStorage.setItem("user", JSON.stringify(data))
   // kirim ke reducer
   return { type: 'LOGIN', payload: data}
}