import { AsyncScalar } from '@src/scalar/AsyncScalar';
import { expect } from 'chai';

describe('scalar/AsyncScalar', () => {
    describe('#value', () => {
        it('should return function result', () => {
            expect(new AsyncScalar(() => 10).value).to.equal(10);
        });
    });
});
