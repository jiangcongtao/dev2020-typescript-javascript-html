function askFirstDealer() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(8000), 3000);
    });
}

function askSecondDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(12000), 5000);
    });
}

function askThirdDealer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(10000), 8000);
    });
}

Promise.all([askFirstDealer(), askSecondDealer(), askThirdDealer()])
.then(prices=> console.log(prices));


Promise.all([1 ,"Hello" , true])
    .then(results => console.log(results));

Promise.all([])
    .then(results => console.log(results));