function askNickForPen() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('Nick: Yep, I have a pen for you'), 3000);
    });
}

function askTomForPen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject('Tom: Sorry, I have only one pen'), 1000);
    });
}

function askJohnForPen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('John: No problem, take my pen'), 8000);
    });
}

function askAtShopForPen() {
    return Promise.resolve('Shoper: we alway have pen for $1');
}
Promise.race([
    askNickForPen(), 
    askTomForPen(), 
    askJohnForPen(),
    askAtShopForPen()
])
.then(pen=> console.log(pen))
.catch(reason=>console.log(reason));
