const calculateSquare = require('../src/calculate-square');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculateSquare', function () {
    this.timeout(4000); // use this to customize timeout for all test cases

    // adjust mocha's timeout setting, this could be inside it block
    // test promise function - using return syntax without done callback
    it('should resolve with number 4 if passed number 2', function () {
        this.timeout(4000); // adjust mocha's timeout setting for one test case
        return expect(calculateSquare(2)).to.eventually.be.equal(4);
    });

    it('should become fulfilled when passed number 2', function () {
        this.timeout(4000); // adjust mocha's timeout setting
        return expect(calculateSquare(2)).to.be.fulfilled;
    });

    it('should become rejected when passed a string instead of a number', () => {
        // this.timeout(6000); // Not work for arrow function, adjust mocha's timeout setting
        return expect(calculateSquare('string')).to.be.rejected;
    }).timeout(4000);

    // test promise function - using notify with done callback
    it('should resolve with number 4 if passed number 2', function (done) {
        // this.timeout(4000); // adjust mocha's timeout setting
        expect(calculateSquare(2)).to.eventually.be.equal(4).notify(done);
    });

    it('should become fulfilled when passed number 2', function (done) {
        // this.timeout(4000); // adjust mocha's timeout setting
        expect(calculateSquare(2)).to.be.fulfilled.notify(done);
    });

    it('should become rejected when passed a string instead of a number', (done) => {
        expect(calculateSquare('string')).to.be.rejected.notify(done);
    }).timeout(4000);

    // use the following technique to make multiple assertions in one test
    it('should resolve with number 4 if passed number 2', function () {
        this.timeout(4000); // adjust mocha's timeout setting for one test case
        return calculateSquare(2).then(result =>{
            expect(result).to.be.above(3);
            expect(result).to.be.equal(4);
        })
        
    });

     it('should become rejected when passed a string instead of a number', function () {
         this.timeout(4000); // adjust mocha's timeout setting for one test case
         return calculateSquare(2).catch(reason => {
             expect(reason).to.not.equal(null);
             expect(reason).to.be.equal('Expect a number argument');
         })

     });
});