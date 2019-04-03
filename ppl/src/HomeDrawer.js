import React,{useState,useEffect} from 'react'
import {createDrawerNavigator,DrawerItems,SafeAreaView,ScrollView} from 'react-navigation'
import {Image,View,Text,AsyncStorage,StyleSheet} from 'react-native'
import Home from './components/Home';
import SignUp from './components/SignUp';
import {Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {getCurrentUser} from './helper/AppUtils'
import {color} from './AppTheme/Themes'
const styles = new StyleSheet.create({
    header:{
        justifyContent:"center",
        alignItems:"center",
        paddingTop:10,
        backgroundColor:color.ACCENT
    },
    headerImage:{
         width:100,
         height:100
    },

    headerText:{
        color:"white",
        fontWeight:"bold",
        fontSize:20,
        margin:8
   },

})
const DrawerComponent=(props)=>{
    const [user,setCurrentUser] = useState({userName:null});
    
    useEffect(()=>{
        getCurrentUser().then(user=>{setCurrentUser(user)})
    })
    
    return(    
            
            <SafeAreaView style={{flex:1}}> 
            
                <View style={styles.header}>
                    <Image style={styles.headerImage} source={{uri:"https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png"}}/>
                    <Text style={styles.headerText} >{user.userName}</Text>
                </View>   
                <ScrollView>
                    <DrawerItems {...props}/>
                </ScrollView>
                <Button style={{width:"100%",padding:10,backgroundColor:color.ACCENT}} onPress={async ()=>{await AsyncStorage.clear();}}>
                        <Icon name="sign-out-alt" size={25} style={{marginLeft:20}} color="white"></Icon>
                        <Text style={{color:"white",fontWeight:"bold",flex:1,marginLeft:30,fontSize:20}}>Logout</Text>
                </Button>
            </SafeAreaView>
        )
    }

const Drawer=createDrawerNavigator({
    Home:{
        screen:Home,
    },
    Screen2:{screen:SignUp}
    },
{
    contentComponent:DrawerComponent,
})

export default Drawer