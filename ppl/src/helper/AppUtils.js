import JWTDecode from 'jwt-decode'
import {AsyncStorage} from 'react-native'

export async function getCurrentUser(){
    const tkn=await AsyncStorage.getItem("token")
    return JWTDecode(tkn);
} 
