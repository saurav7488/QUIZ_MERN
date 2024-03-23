import {combineReducers, configureStore} from '@reduxjs/toolkit' 

// call reducer
import questionReducer from './question-reducer'
import  resultReducer  from './result-reducer'

const rootReducer = combineReducers({
     questions:questionReducer,
     result:resultReducer
})

// create store with reducer 

export default configureStore({reducer:rootReducer})
