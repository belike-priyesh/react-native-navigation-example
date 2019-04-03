import React ,{Component}from 'react'

import {View,TextInput,StyleSheet,Button,TouchableNativeFeedback,Text,Alert,AsyncStorage,ToastAndroid} from 'react-native'
import validate,{type} from "../helper/validator"
import Axios from '../helper/Axios';
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

class Login extends Component{
   
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };

    state={
        email:"",
        password:""
    }
    isEligibleToLogin=()=>{
        const {email,password} = this.state;

        if(!email){
            Alert.alert("Login Failed","Please enter email");
            return false;
        }
        if(!password){
            Alert.alert("Login Failed","Please enter password");
            return false;
        }if(!validate(email,type.EMAIL)){
            Alert.alert("Login Failed","Please enter a valid email");
            return false;
        }
        if(password.trim().length<7){
            Alert.alert("Login Failed","password too short");
            return false;
        }

        return true;
    }

    
    async componentDidMount(){
        if(await AsyncStorage.getItem("token")){
           this.props.navigation.navigate("MainPage")
        }
    }

    loginNow=()=>{
        
        if(this.isEligibleToLogin()){
            //Alert.alert("Login Success","Successfully Login")
            creds={creds:this.state}
            Axios.post("/account/login",creds)
            .then(async result=>{
                await AsyncStorage.setItem("token",result.data.token)
               // Alert.alert(`Hello ${result.data.token}`, await AsyncStorage.getItem("token"))
                this.props.navigation.navigate("MainPage")
            })
            .catch(err=>{
                Alert.alert("Warning...",err.response.data.error)

            })
        }
    }
    render(){
        return(
        <View style={style.container}>
        <View  style={style.loginButtonPanel}  >
            <TextInput style={style.inputStyle} placeholder="E-Mail ID" onChangeText={(email)=>{this.setState({email})}}/> 
            <TextInput style={style.inputStyle} secureTextEntry={true}  placeholder="Password" onChangeText={(password)=>{this.setState({password})}}/>
            <TouchableNativeFeedback style={{borderRadius:100}} onPressOut={()=>{this.loginNow()}}>
                <View style={style.buttonStyle}>
                    <Text style={{fontSize:20,color:"white",textAlign:"center"}}>Submit</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
            <View style={style.signupContainer}>
                <Text>
                    Haven't Registered Yet?
                </Text>
                <Button title="Create Account" onPress={()=>{this.props.navigation.navigate("SignUp")}}/>
            </View>
        </View>
        )
    }
}

export default Login