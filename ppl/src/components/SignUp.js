import React ,{Component}from 'react'

import {View,TextInput,StyleSheet,Button,TouchableNativeFeedback,Text} from 'react-native'

const style = StyleSheet.create({
   
        inputStyle:{
            borderWidth: 1,
            borderColor:"red",
            marginTop:"5%",
            width:"100%"
        },
        loginButtonPanel:{
            width:"100%",
            alignItems:"center",
            width:"100%"
        },
        buttonStyle:{
            width:"40%",
            marginTop:"2%",
            backgroundColor:"red",
            elevation:10,
            color:"white",
            padding:"3%",
            borderRadius:100
        },
        container:{
            display:"flex",
            width:"100%",
            height:"100%",
            padding:"5%",
            alignItems:"center",
            justifyContent:"space-between"
        },

        signupContainer:{
          alignContent:"flex-end"  
        }

        
    
});

class SignUp extends Component{

    
    static navigationOptions={
        title:"SignUp",
        headerStyle:{
            backgroundColor:"tomato",
        },
        headerTintColor: 'white',
      
    }
    render(){
        return(
        <View style={style.container}>
        <View  style={style.loginButtonPanel}  >
            <TextInput style={style.inputStyle} placeholder="Name"/> 
            <TextInput style={style.inputStyle} placeholder="E-Mail ID"/> 
            <TextInput style={style.inputStyle} placeholder="Password"/>

            <TouchableNativeFeedback style={{borderRadius:100}} background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={style.buttonStyle}>
                    <Text style={{fontSize:20,color:"white",textAlign:"center"}}>Sign Up</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
            <View style={style.signupContainer}>
                <Text>
                    Already Have an Account?
                </Text>
                <Button title="Login" onPress={()=>{this.props.navigation.navigate("Home")}}/>
            </View>
        </View>
        )
    }
}

export default SignUp