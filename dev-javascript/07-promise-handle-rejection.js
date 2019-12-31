// new Promise(function (resolve, reject) {
//                 throw new Error('Something wrong happened!');
//                 console.log("Hello World");
//     }).then(undefined, function (error) {
//         console.log(error.message);
//     });

// same to the following
// new Promise(function (resolve, reject) {
//     throw new Error('Something wrong happened!');
//     console.log("Hello World");
// }).catch(function (error) {
//     console.log(error.message);
// });

new Promise(function (resolve, reject) {
        reject(new Error('Something wrong happened!'));
        console.log("Hello World");
    })
    .catch(function (error) {
        console.log(error.message);
    });


new Promise(function (resolve, reject) {
        resolve('success');
    })
    .then(result => {
        console.log(result);
        return new Promise((resolve, reject) => {
            reject(new Error('Something wrong happened!'));
        });
    })
    .catch(function (error) {
        console.log(error.message);
    });