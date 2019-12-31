import {
    createStore
} from 'redux'

var initialState = {
    counter: 0
}

function reducer(state:any, action:any) {
    if (action.type === 'INCREMENT') {
        state = Object.assign({}, state, {
            counter: state.counter + 1
        })
    }
    return state
}

export var store = createStore(reducer, initialState)