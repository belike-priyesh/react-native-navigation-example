import {KEYS} from  '../actions/postActions'

const initialState={
    isFetching:false,
    allPostsData:[],
    errorFetchingPost:null,
    newPostFetched:null,
    isPostSent:false,
    sendingPost:false,
}

export default function postReducers(state=initialState,action){
    switch(action.type){

        case KEYS.POST_FETCHING :{
            return{
                ...state,
                isFetching:true
            }
        }

        case KEYS.ERROR_FETCHING_POST:{
            return{
                ...state,
                isFetching:false,
                errorFetchingPost:action.error,
                sendingPost:false,
                isPostSent:false,
            }
        }

        case KEYS.POST_FETCHED:{
            return{
                ...state,
                isFetching:false,
                errorFetchingPost:null,
                allPostsData:action.postData
            }
        }

        case KEYS.NEW_POST_FETCHED:{
            return{
                ...state,
                isFetching:false,
                errorFetchingPost:null,
                isPostSent:false,
                allPostsData:[action.post,...state.allPostsData]
            }
        }

        case KEYS.POST_SENDING:{
            return{
                ...state,
                sendingPost:true,
            }
        }
    
        case KEYS.POST_SENT:{
            return{
                ...state,
                isPostSent:true,
                errorFetchingPost:null,
            }
        }
        default:
             return state
    }
}