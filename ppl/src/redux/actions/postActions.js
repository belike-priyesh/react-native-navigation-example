import Axios from "../../helper/Axios";
import socketIOClient from 'socket.io-client'
const ERROR_FETCHING_POST = "ERROR-FETCHING-POST"
const POST_FETCHED = "POST-FETCHED"
const POST_FETCHING = "POST-FETCHING"
const NEW_POST_FETCHED = "NEW-POST-FETCHED"
const POST_SENDING = "POST-SENDING"
const POST_SENT = "POST-SENT"
export const KEYS = {
    ERROR_FETCHING_POST,
    POST_FETCHED,
    POST_FETCHING,
    NEW_POST_FETCHED,
    POST_SENDING,
    POST_SENT
}

const fetchedPostData = (postData)=>({type:POST_FETCHED,postData})

const errorFetchingPostData = (error)=>({type:ERROR_FETCHING_POST,error})

const fetchingPost = ()=>({type:POST_FETCHING,fetchingPost:true})

const newPostFetched = (post)=>({type:NEW_POST_FETCHED,post})

const sendingPost = ()=>({type:POST_SENDING,isSending:true})

const postSent = ()=>({type:POST_SENT,postSent:true})

export function fetchAllPost(){
 
    return function(dispatch){
        dispatch(fetchingPost())
        Axios.get("user/getPost/all")
            .then(result=>{
               
                dispatch(fetchedPostData(result.data))
            })
            .catch(err=>{
                alert(err);
                dispatch(errorFetchingPostData(err))
            })
    }
}

export function sendPost(payLoad){
 
    return function(dispatch){
        dispatch(sendingPost())
        Axios.post("user/sendPost",payLoad)
            .then(result=>{
               dispatch(postSent())
            })
            .catch(err=>{
                
                dispatch(errorFetchingPostData(err))
            })
    }
}

export function activateNewPostFetchedListener(){
   return function(dispatch){
    const socket = socketIOClient("https://the-pet-social.herokuapp.com/")
    socket.on("newPost",(data)=>{
        console.warn("socket is running")
        dispatch(newPostFetched(data));
    })
   }
}