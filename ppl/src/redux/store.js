import {createStore,combineReducers,applyMiddleware} from 'redux'
import PostReducer from './reducers/postReducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({PostReducer})

export default createStore(rootReducer,applyMiddleware(thunk))