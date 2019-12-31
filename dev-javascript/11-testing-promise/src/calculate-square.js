/**
 * Re-implement callback-based calculateSquare.
 * 
 * @param {*} number 
 */
function calculateSquare(number) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            if (typeof number !== 'number') {
                reject(new Error('Expect a number argument'));
                return;
            }
            const result = number * number;
            resolve(result);
        }, 2000);
    });
}

module.exports = calculateSquare;