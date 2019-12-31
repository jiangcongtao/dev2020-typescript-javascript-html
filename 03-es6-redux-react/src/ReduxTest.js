import React, { Component } from 'react';
// import { store } from './AppState'

class ReduxTest extends Component {

    constructor(props){
        super()
        this.incrementCounter = this.incrementCounter.bind(this)
        this.update = this.update.bind(this)
        this.store = props.store
    }

    incrementCounter() {
        this.store.dispatch({
            type: 'INCREMENT'
        })

        console.log('incrementCounter executed!')
    }
    update(state) {
        document.getElementById('counter').textContent = state.counter;
    }
    componentDidMount() {
        document.getElementById('button').addEventListener('click', this.incrementCounter) 
        self = this
        this.store.subscribe(function () {
            self.update(self.store.getState())
        })
    }

    render() {
        return (
            <div className="reduxtest">
                <h3>Experiment Redux by click the button</h3>
                <div id="counter">-</div>
                <button id="button">Increment</button>
            </div>
        );
    }
}

export default ReduxTest
