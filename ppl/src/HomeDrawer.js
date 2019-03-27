import React from 'react'
import {createDrawerNavigator,DrawerItems,SafeAreaView,ScrollView} from 'react-navigation'
import {Image,View,Text} from 'react-native'
import Home from './components/Home';
import SignUp from './components/SignUp';

const DrawerComponent=(props)=>(
   <SafeAreaView style={{flex:1}}> 
      <View style={{justifyContent:"center",alignItems:"center",margin:10}}>
          <Image style={{width:100,height:100}} source={{uri:"https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png"}}/>
          <Text>John Doe</Text>
      </View>   
       <ScrollView>
         <DrawerItems {...props}/>
       </ScrollView>
         
   </SafeAreaView>
)

const Drawer=createDrawerNavigator({
    Home:{screen:Home},
    Screen2:{screen:SignUp}
},
{
    contentComponent:DrawerComponent
})

export default Drawer