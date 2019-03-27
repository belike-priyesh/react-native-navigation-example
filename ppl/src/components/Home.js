import React from 'react'
import {View,Text,Button} from 'react-native'
import {Icon} from "native-base"
export default class Home extends React.Component{
    static navigationOptions={
        drawerLabel:"Home",
        drawerIcon:({tintColor})=>(
            <Icon name="home" style={{color:tintColor}}/>
        )
    }
    render(){
        return(
            <View>
            
            </View>
        )
    }
}