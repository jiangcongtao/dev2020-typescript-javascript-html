// ES 6 use async/await for synchronouse function defintion and call

// async prefixed function always returns a promise

/**
 * JavaScript ES6 provides two language level operator: async and await
 * 
 * async - define an asynchronous function
 * await - wait for asynchronous fuction to be settled, either fulfilled or rejected.
 */

async function f1(){}
var v = f1(); // a promise state and value: fulfilled, undefine

async function f1() { return 'Hello World'}
var v = f1(); // a promise state and value: fulfilled, 'Hello World'

async function f1() {
    return Promise.resolve('Hello World');
}
var v = f1(); // a promise state and value: fulfilled, 'Hello World'

async function f1() {
    return Promise.reject(404)
}
var v = f1(); // a promise state and reason: reject, 404


async function f1() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Hello World');
        }, 5000);
    });
}
var v = f1(); // a promise state and value after 5 seconds: fulfilled, 'Hello World'