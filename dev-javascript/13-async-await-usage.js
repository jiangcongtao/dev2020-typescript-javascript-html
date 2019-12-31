function getSpecificNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(42);
        }, 2000);
    });
}

async function f() {
    let number = await getSpecificNumber();
    console.log(number);
}


f();
console.log('Done!')

// output: 
// Done!
// 42

