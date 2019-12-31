import { AppStateType, ActionType, initialState } from './components/AppState'
// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'

function reducer(state: any, action: ActionType) {
    if (action.type === 'INCREMENT') {
        state = Object.assign({}, state, { counter: state.counter + 1 })
    }
    return state
}

// var store1 = createStore(reducer, initialState)
const store = configureStore({
    reducer: reducer
})


function incrementCounter() {
    store.dispatch({
        type: 'INCREMENT'
    })
}

// Trick to use document.getXX in typescript:
// https://stackoverflow.com/questions/52491832/how-to-use-document-getelementbyid-method-in-typescript
var btn = document.getElementById('button')!
if (btn) {
    console.log("Find button!")
document.getElementById('button')!.addEventListener('click', incrementCounter)
}else{
    console.log("Cannot find button!")
}

function render(state: any) {
    document.getElementById('counter')!.textContent = state.counter;
}
store.subscribe(function () {
    render(store.getState())
})