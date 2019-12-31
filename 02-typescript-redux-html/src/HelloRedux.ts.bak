import { createStore } from 'redux'

// To use node.js built in modules in typescript
// npm i -save @types/node
import assert = require("assert");
assert.strictEqual(1, 3-2)

interface ActionType {
    type: string    
}

function counter(state = 0, action: ActionType) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

let store = createStore(counter)

store.subscribe(() => console.log(`get state: ${store.getState()}`))

store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'DECREMENT' })


