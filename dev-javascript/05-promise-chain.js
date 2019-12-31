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

calculateSquarePromise(3)
    .then((result) => {
        console.log(result); // 9
    })
    .then((result1) => {
        console.log(result1); // undefined
    });

calculateSquarePromise(3)
    .then((result) => {
        console.log(result); // 9
        return 20;
    })
    .then((result1) => {
        console.log(result1); // 20
    });

// calculateSquarePromise(3)
//     .then((result) => {
//         console.log(result); // 9
//         return calculateSquarePromise("3");
//     })
//     .then((result1) => {
//         console.log(result1); // not executed
//     }, (error)=>{
//          console.log(error); // Error: Expect a number argument
//     });

