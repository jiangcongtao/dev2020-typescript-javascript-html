/**
 * Promise is a javascript object representing an eventual result of a javascript asynchronous operation
 * 
 * A promise has promise state and promise value
 * 
 * There are 3 possible promise states: pending, resolved/fulfilled, rejected
 */

 // constuct a promise object
 const pendingPromise = new Promise(function(resolve, reject){  });
 console.log(pendingPromise);

 const resolvedPromise = new Promise(function (resolve, reject) {
     resolve('success');
 });
 console.log(resolvedPromise);

  const rejectedPromise = new Promise(function (resolve, reject) {
      reject('reject reason');
  });
  console.log(rejectedPromise);


const resolvedOncePromise = new Promise(function (resolve, reject) {
    // a promise can only fulfill or reject once.
    resolve('success1');
    resolve('success2');
    reject('reject reason');
});
console.log(resolvedOncePromise);

/**
 * Returns a promise that calcuate the sum of two numbers.
 * 
 * @param {*} aNumber 
 * @param {*} bNumber 
 */
function sumPromise(aNumber, bNumber) {
    return new Promise((resolve, reject) =>{
        if (typeof aNumber !== 'number' || typeof bNumber !== 'number') {
            reject(new Error('Expect aguments to be the type of number'));
        } else {
            resolve(aNumber + bNumber);
        }
    });
}

// // use promise function

// // output: Expect aguments to be the type of number
// sumPromise("ss", 5)
//     .then((result) => console.log(`Result: ${result}`))
//     .catch((error) => console.log(error.message));


// output: Result: 8
sumPromise(3, 5)
    .then(
        (result) => console.log(`Result: ${result}`),
        (error) => console.log(error.message));
// similar to the following code.
// sumPromise(3, 5)
//     .then((result) => console.log(`Result: ${result}`))
//     .catch((error) => console.log(error.message));
