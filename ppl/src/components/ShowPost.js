import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import PostComponent from './PostComponent';
import { Container } from 'native-base';

export class ShowPost extends Component {



render() {
    const payload = this.props.navigation.getParam("payload");

    return (
        <Container style={{flex:1,backgroundColor:"red"}}>
             <PostComponent onClick={()=>{}} post={payload}/>
        </Container>
    )
  }
}


export default ShowPost
