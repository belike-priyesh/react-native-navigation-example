import {Modal,Text,Alert,Image} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import {TouchableRipple,ProgressBar} from 'react-native-paper'
import {getCurrentUser} from '../helper/AppUtils'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import validator ,{type} from '../helper/validator'
import ImagePicker from 'react-native-image-picker'
import {Header, 
    Body, Left,
    Container,
    Textarea, 
    Button, Right,
    Footer,
    FooterTab} from "native-base"

     
import {sendPost} from '../redux/actions/postActions'
import AppTheme from '../AppTheme/AppStyle'
import {color} from '../AppTheme/Themes'

class SendPostModal extends Component {
        

    state={
        postText:null,
        image:null,
    }
    options ={
        storageOptions:{
            skipBackup:true,
            path:"images"
        }
    }
    
    openImagePicker = ()=>{
        ImagePicker.launchImageLibrary(this.options,response=>{
            if(response.didCancel){
  
            } else if(response.customButton){
  
            }else if(response.error){
  
            }else{
                const image = {
                    uri:response.uri,
                    name:response.fileName,
                    type:response.type
                }
                
                this.setState({image})
            }
        })
    }
    openCamera = ()=>{
        ImagePicker.launchCamera({},response=>{
            if(response.didCancel){
  
            } else if(response.customButton){
  
            }else if(response.error){
  
            }else{
                const image = {
                    uri:response.uri,
                    name:response.fileName,
                    type:response.type
                }
                
                this.setState({image})
            }
        })
    }
    async componentDidMount(){
        this.currentUser=await getCurrentUser();

    }
    
    componentDidUpdate(prevProps){
        if(this.props.sendingPost){
            
        }
        if(!prevProps.isPostSent&&this.props.isPostSent){
            this.props.onRequestClose()
        }
    }
    sendPost=async ()=>{

        if(validator(this.state.postText,type.IS_EMPTY)){
            Alert.alert("Warning!!","Nothing to post");
        }
        else if(!this.currentUser){
            Alert.alert("Warning!!","User not found try posting again");
        }
        else{
            const payload={
                postText:this.state.postText,
                postedBy:this.currentUser._id,
                category:"Humans"
            }
            const formData= new FormData();
          
            formData.append("file",this.state.image) 
            formData.append("data",JSON.stringify(payload)) 
            await this.props.dispatch(sendPost(formData))
        }
    }
    render() {
        
        return (
         
            <Modal animationType="slide" visible={this.props.visible} onRequestClose={this.props.onRequestClose}> 
                <Header transparent >
                    <Left>
                            <Button transparent onPress={this.props.onRequestClose}>
                                <MaterialIcon name="navigate-before" color="black" size={35}/>
                            </Button>
                    </Left>
                    <Body></Body>
                    <Right>
                        
                        <TouchableRipple  onPressOut={this.sendPost}  rippleColor={color.SECONDARY} style={[AppTheme.outLinedButton,AppTheme.small]} onPress={()=>{}}>
                                <Text style={{fontWeight:"bold"}}>POST</Text>
                        </TouchableRipple>
                    
                    </Right>
                </Header>   
                <Container  style={{flexDirection:"column"}}>
                    <Textarea autoFocus placeholder="How's Your Day Today?"  onChangeText={postText=>{this.setState({postText})}} style={{flex:1,color:"teal",textAlign:"auto",fontSize:20,fontWeight:"bold"}} />
                     {  this.state.image?
                     <React.Fragment>
                         <Text style={{marginLeft:10,fontSize:15,fontWeight:"bold"}}>Selected Photos</Text>
                        <Image style={{height:100,width:100,margin:10}}source={{uri:this.state.image.uri}}></Image>
                    </React.Fragment>:null}
                    <Footer>
                        <FooterTab  >
                            <Button onPress={this.openImagePicker}>
                                <MaterialIcon name="image" color="white" size={30}></MaterialIcon>
                            </Button>
                        </FooterTab>
                        <FooterTab>
                            <Button onPress={this.openCamera}>
                                <MaterialIcon name="camera" color="white" size={30}></MaterialIcon>
                            </Button>
                        </FooterTab>
                        <FooterTab>
                            <Button onPress={()=>{}}>
                                <MaterialIcon name="insert-emoticon" color="white" size={30}></MaterialIcon>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Modal>
        )
    }
}

function mapStateWithProps(state){
    return{
        isPostSent:state.PostReducer.isPostSent,
        errorSendingPost:state.PostReducer.errorFetchingPost,
        sendingPost:state.PostReducer.sendingPost,
    }
}

export default connect(mapStateWithProps)(SendPostModal)