import { ScalarOf } from '@src/scalar/ScalarOf';
import { expect } from 'chai';

describe('scalar/ScalarOf', () => {
    describe('#value', () => {
        it('should return input', () => {
            expect(new ScalarOf(10).value).to.equal(10);
        });
    });
});
