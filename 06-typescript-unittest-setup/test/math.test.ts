import { add } from '../src/math';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('Add - in math library', () => {

    it('should be able to add to 7 if passed with 3 and 4', () => {
        expect(add(3, 4)).to.equal(7);
    });

});