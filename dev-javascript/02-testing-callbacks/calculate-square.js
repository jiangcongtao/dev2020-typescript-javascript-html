/**
 * Calculate the sequare of the given number.
 * @param {*} number The number for which to calculate the sequare
 * @param {*} callback Callback to be invoked with calculation error and result
 */
function calculateSquare(number, callback) {
    setTimeout(function () {
        if (typeof number !== 'number') {
            callback(new Error('Expect a number typed argument'));
            return;
        }
        const result = number * number;
        callback(null, result);
    }, 1000);
}


module.exports = calculateSquare