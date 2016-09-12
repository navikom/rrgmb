
import { INCREASE, DECREASE } from '../actions/constants'

const initialState = {
    number: 1
}

function update(state = initialState, action) {
    if(action.type === INCREASE) {
        return { number: state.number + action.amount }
    }
    else if(action.type === DECREASE) {
        return { number: state.number - action.amount }
    }
    return state
}

module .exports = {
    update
}