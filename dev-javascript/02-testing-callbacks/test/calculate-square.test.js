const calculateSquare = require('../calculate-square');
const expect = require('chai').expect;

describe('calculateSquare', function(){
    // happy cause
    it('should return 4 if passed 2', function(done){
        calculateSquare(2, function (err, res) { 
            expect(res).to.equal(4);
            // to test asynchronous function, done argument must be specified, and invoked in the test
            done();
         })
    })

    // failed cause
    // it('should return 9 if passed 3', (done)=>{
    //     calculateSquare(4, (err, res) => {
    //         console.log('callback executed!')
    //         expect(res).to.equal(9);
    //         // to test asynchronous function, done argument must be specified, and invoked in the test
    //         done(); 
    //     })
    // })

    // error cause
    it('should return error if passed a string', (done) => {
        calculateSquare('string', (err, res) => {
            expect(err).to.not.equal(null);
            // to test asynchronous function, done argument must be specified, and invoked in the test
            expect(err.message).to.equal('Expect a number typed argument');
            done(); 
        })
    })
})
