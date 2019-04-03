
import React, { Component } from 'react'
import { Text, View ,Image} from 'react-native'
import { Card, CardItem, Thumbnail ,Body, Left,Button, Container, Content} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5'
import { TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default class PostComponent extends Component {


  render() {
    const {postText,photo,user,createdOn}=this.props.post
    const {firstName,lastName,userName} = user;
    return (
        <TouchableWithoutFeedback  onPress={this.props.onClick}>
            <Card  style={{flex:1,padding:10,elevation:2}} >
                
                <CardItem cardBody >
            
                    <Thumbnail small style={{marginRight:10}} source={{uri:"https://www.shareicon.net/data/2016/09/01/822711_user_512x512.png"}}/>

                    <Body>
                        <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
                            <Text style={{color:"black",fontWeight:"bold"}}>{`${firstName} ${lastName}`}</Text>
                            <Text style={{alignSelf:"flex-end"}}>{`${new Date(createdOn).toDateString()}`}</Text>
                        </View>
                        
                        <Text>{`@${userName}`}</Text>
                    </Body>
            
                </CardItem>
                <Content style={{marginLeft:"14%"}}>
                        {
                            postText?
                            <CardItem cardBody>
                                <Text style={{marginTop:5,marginBottom:5}}>
                                {postText}
                                </Text>
                            </CardItem>
                            :null
                        }
                        
                            {photo?
                            <CardItem cardBody>
                                <Image resizeMethod="auto"  style={{width:"100%",minHeight:300}} source={{uri:photo}}/>
                            </CardItem>
                            :null}

                        <CardItem style={{justifyContent:"space-between"}}>
                                <Button transparent>
                                    <Icon name="like1" size={20}></Icon>
                                </Button>
                                <Button transparent>
                                    <FontAwesomeIcon name="comment-alt" size={20}></FontAwesomeIcon>
                                </Button>
                                <Button transparent>
                                    <FontAwesomeIcon name="share" size={20}></FontAwesomeIcon>
                                </Button>
                        </CardItem>
                    </Content>
        
                </Card>
         </TouchableWithoutFeedback>          
           
    )
  }
}
 