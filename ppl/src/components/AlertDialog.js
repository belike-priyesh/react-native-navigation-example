import React, { Component } from 'react'
import { Text, View ,Modal,ActivityIndicator} from 'react-native'
import { Card, Container, CardItem } from 'native-base';
import {dimension} from '../AppTheme/Themes'
import { Button } from 'react-native-paper';
const AlertDialog=(props)=>{

    

    return (
      <Modal transparent visible={props.visible}>
            <View style={{height:dimension.MATCH_PARENT_HEIGHT,width:dimension.MATCH_PARENT_WIDTH,justifyContent:"center",alignItems:"center"}}>
                <Card style={{height:"15%",width:"70%",backgroundColor:"white",justifyContent:"center",elevation:10,}}>

                   <CardItem >
                        <ActivityIndicator size={40} style={{marginRight:"10%"}}/>
                        <Text style={{fontWeight:"bold"}}>{props.message}</Text>
                   </CardItem>
                   <CardItem style={{justifyContent:"flex-end"}}>
                       <Button transparent onPress={props.toggleAlert}>
                            <Text>Ok</Text>
                       </Button>
                   </CardItem>
               </Card>
            </View>
      </Modal>
    )
}

export default AlertDialog