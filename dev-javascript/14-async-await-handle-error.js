/**
 * Two ways of handling error in async/await
 * 1. use try..catch
 * 2. promise.catch
 */

async function work(){
    throw new Error('SOMETHING BAD HAPPENED');
}

async function process() {
    // 1. handle error using try..catch
    try {
        await work();
        console.log('After work!');
    }catch(e) {
        console.error(e.message);
    }
}

process();
console.log('After process()');

// 2. hande error using .catch
work().catch(reason => {
    console.log(`reason: ${reason.message}`);
});
