import React, { Component } from 'react'
import { Text, View,Image,AsyncStorage } from 'react-native'

export default class SplashScreen extends Component {

    async componentDidMount(){
        if(await AsyncStorage.getItem("token")){
           this.props.navigation.navigate("MainPage")
        }else{
            this.props.navigation.navigate("SessionScreen")
        }
    }

  render() {
    return (
      <View style={{alignItems:"center",justifyContent:"center",flex:1,backgroundColor:"yellow"}}>
          <Image style={{width:250,height:250}}source={require('../../assets/brain.png')}></Image>
          <Text style={{fontSize:40,marginTop:20,color:"purple",fontWeight:"bold"}}>@BeSocial</Text>
      </View>
    )
  }
}
