function askFirstDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(8000), 3000);
    });
}

function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Not a suitable car'), 5000);
    });
}

function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

// output => Not a suitable car
Promise.all([
        askFirstDealer(),
        askSecondDealer(),
        askThirdDealer()
    ])
    .then(prices => console.log(prices))
    .catch(reason => console.log(reason));

// output => [ 8000, 'Not a suitable car', 10000 ]
Promise.all([
        askFirstDealer().catch(error => {
            return error;
        }),
        askSecondDealer().catch(error => {
            return error;
        }),
        askThirdDealer().catch(error => {
            return error;
        })
    ])
    .then(prices => console.log(prices))
    .catch(reason => console.log(reason));


// output => Don't want to bid
Promise.all([
        askFirstDealer().catch(error => {
            return error;
        }),
        askSecondDealer().catch(error => {
            return error;
        }),
        askThirdDealer().catch(error => {
            return error;
        }),
        Promise.resolve(120),
        Promise.reject("Don't want to bid")
    ])
    .then(prices => console.log(prices))
    .catch(reason => console.log(reason));