import React, { Component } from 'react';

class ReduxTest extends Component<any, any> {
    store: any;

    constructor(props: any) {
        super(props)
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
    update(state: any) {
        document.getElementById('counter')!.textContent = state.counter;
    }
    componentDidMount() {
        document.getElementById('button')!.addEventListener('click', this.incrementCounter)
        let self = this
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
