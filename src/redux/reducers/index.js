import * as all from './count'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    ...all,
    routing: routerReducer
})