import React from 'react'
import {connect} from 'react-redux'

import {Text,StyleSheet,Dimensions,FlatList,NativeModules,DeviceEventEmitter} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import SimpleLineIcons  from 'react-native-vector-icons/SimpleLineIcons'
import PostComponent from './PostComponent';
import AppTheme from '../AppTheme/AppStyle'
import {color} from '../AppTheme/Themes'
import {Header, 
            Body,Title,
            Content, Container, Fab,Left, Right} 
             from "native-base"


import {fetchAllPost,activateNewPostFetchedListener} from '../redux/actions/postActions'
import SendPostModal from './SendPostModal';
import AlertDialog from './AlertDialog';

const styles=StyleSheet.create({
    fabStyle:{
        position:"absolute",
        zIndex:50,
        backgroundColor:color.ACCENT
    },

})
class Home extends React.Component{
    state={
        posts:[],
        active:false,
    }


    
    static navigationOptions={
        drawerIcon:({tintColor})=>(
            <Icon name="home" size={20} style={{color:tintColor}}/>
        )
    }


    togglePostTypingModal=()=>{
        this.setState({active:!this.state.active})
        return true;
    }

    componentDidMount(){
        this.props.dispatch(fetchAllPost())
        this.props.dispatch(activateNewPostFetchedListener())
        NativeModules.NewImageDetectorModule.startNewImageDetector(()=>{
            setTimeout(()=>{
                alert("Detected Image")
            },2000)
        })
      
    }

    onCardClickListener=(payload)=>{
        this.props.navigation.navigate("showPostScreen",{payload})
    }

    render(){
        return(
            <Container>
                <AlertDialog visible={false} message="Uploading"/>
                <SendPostModal  visible={this.state.active} onRequestClose={this.togglePostTypingModal}/>
          
                <Fab
                
                    style={styles.fabStyle}
                    large
                      onPress={this.togglePostTypingModal}>
                    <Icon name="feather" style={{color:color.SECONDARY}}></Icon>
                 </Fab>


                <Header style={AppTheme.header}> 
                    <Left>
                        <SimpleLineIcons name="drawer" color="white" size={20}></SimpleLineIcons>
                 
                    </Left>
                    <Body>
                           <Title>
                                @beSocial
                        </Title>
                    </Body>
                
                </Header>
                <Content>

                <FlatList
                    data={this.props.posts}
                    style={{backgroundColor:"#E0E0E0"}}
                    renderItem={({item})=><PostComponent onClick = {()=>{this.onCardClickListener(item)}} post={item}/>}
                    keyExtractor={(item)=>item._id}/>
         
            
                </Content>

            </Container>
        )
    }


}



function mapStateWithProps(state){
    return{
        isFetchingPost:state.PostReducer.isFetching,
        errorFetchingPost:state.PostReducer.errorFetchingPost,
        posts:state.PostReducer.allPostsData
    }
}

export default connect(mapStateWithProps)(Home)