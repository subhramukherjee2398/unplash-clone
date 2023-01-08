import { combineReducers} from 'redux'
import {imageReducer}  from './imageReducer'




export const reducer = combineReducers(
 {
    all : imageReducer
 }
)

