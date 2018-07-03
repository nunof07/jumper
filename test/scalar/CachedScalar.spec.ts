import { AsyncScalar } from '@src/scalar/AsyncScalar';
import { CachedScalar } from '@src/scalar/CachedScalar';
import { expect } from 'chai';

describe('scalar/CachedScalar', () => {
    describe('#value', () => {
        it('should only calculate result once', () => {
            let x = 1;
            const cached = new CachedScalar(
                new AsyncScalar(() => {
                    x += 1;

                    return x;
                })
            );
            expect(cached.value).to.equal(2);
            expect(cached.value).to.equal(2);
        });
    });
});
