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

// Use the function to calcuate the square of numbers
calculateSquare(1, function (error, result) {
    console.log(result);
})

calculateSquare(2, function (error, result) {
    console.log(result);
})

calculateSquare(3, function (error, result) {
    console.log(result);
})

// Example code to show callback hell problem

calculateSquare(10, function (error, result) {
    console.log(result);
    calculateSquare(20, function (error, result) {
        console.log(result);
        calculateSquare(30, function (error, result) {
            console.log(result);
            calculateSquare(40, function (error, result) {
                console.log(result);
                calculateSquare(50, function (error, result) {
                    console.log(result);
                })
            })
        })
    })
})