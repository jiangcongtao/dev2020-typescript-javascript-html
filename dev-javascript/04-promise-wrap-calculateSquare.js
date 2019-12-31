/**
 * Calculate the sequare of the given number.
 * @param {*} number The number for which to calculate the sequare
 * @param {*} callback Callback to be invoked with calculation error and result
 */
function calculateSquare(number, callback) {
    setTimeout(function () {
        if (typeof number !== 'number') {
            callback(new Error('Expect a number argument'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000)
}

/**
 * Wraps calculateSquare callback-based function using javascript promise
 * 
 * This practice demostrates how to use Promise to remove callback hell issue in the client code.
 * 
 * @param {*} number 
 */
function calculateSquarePromiseWrapper(number) {
    return new Promise((resolve, reject) => {
        calculateSquare(number, (error, result) => {
            if (error !== null) {
                reject(error);
                return;
            }
            resolve(result);
        });
    });
}

/**
 * Re-implement callback-based calculateSquare.
 * 
 * @param {*} number 
 */
function calculateSquarePromise(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number !== 'number') {
                reject(new Error('Expect a number argument'));
                return;
            }
            const result = number * number;
            resolve(result);
        }, 1000);
    });
}


// use functions
//output => result: 9
calculateSquarePromiseWrapper(3).then(
    (result) => console.log(`result: ${result}`),
    (error) => console.log(`error: ${String(error)}`));

//output=> error: Error: Expect a number argument
calculateSquarePromiseWrapper("3").then(
    (result) => console.log(`result: ${result}`),
    (error) => console.log(`error: ${String(error)}`));


//output => result: 9
calculateSquarePromise(3).then(
    (result) => console.log(`result: ${result}`),
    (error) => console.log(`error: ${String(error)}`));

//output=> error: Error: Expect a number argument
calculateSquarePromise("3").then(
    (result) => console.log(`result: ${result}`),
    (error) => console.log(`error: ${String(error)}`));