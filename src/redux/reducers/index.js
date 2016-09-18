import * as todos from './todos'
import * as count from './count'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as fetching } from 'redux-fetch-data';

export default combineReducers({
    ...todos,
    ...count,
    fetching,
    routing: routerReducer
})