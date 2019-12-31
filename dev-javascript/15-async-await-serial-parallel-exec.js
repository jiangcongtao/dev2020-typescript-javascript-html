async function printNumber1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
            console.log('printNumber1 completed!');
        }, 4000);
    });
}

async function printNumber2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(2);
            console.log('printNumber2 completed!');
        }, 1000);
    });
}

async function oneByOne() {
    let number1 = await printNumber1();
    let number2 = await printNumber2();

    console.log(number1, number2);
}

oneByOne();

async function parallel1() {
    let number1Promise = printNumber1();
    let number2Promise = printNumber2();

    const number1 = await number1Promise;
    const number2 = await number2Promise
    console.log(number1, number2);
}
parallel1();

async function parallel2() {
    let number1Promise = printNumber1();
    let number2Promise = printNumber2();

    const [number1, number2] = [await number1Promise, await number2Promise]
    console.log(number1, number2);
}
parallel2();

async function parallel3() {
    let number1Promise = printNumber1();
    let number2Promise = printNumber2();

    console.log(await number1Promise, await number2Promise);
}
parallel3();

async function parallel4() {
    let number1Promise = printNumber1();
    let number2Promise = printNumber2();
    Promise.all(number1Promise, number2Promise)
        .then(numbers => {
            console.log(numbers);
        }, error => {});

}
parallel4();


// FIX: TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
async function parallel5() {
    // let number1Promise = printNumber1();
    // let number2Promise = printNumber2();
    // try {
    //     await Promise.all(number1Promise, number2Promise);
    //     console.log("numbers:");
    // }catch(error) {
    //     console.error(error)
    // }
}
parallel5();

console.log('DONE');