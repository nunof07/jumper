import { compositeUpdate } from '@src/core/compositeUpdate';
import { expect } from 'chai';
import { times } from 'ramda';
import * as sinon from 'sinon';

type ComponentSpy = {
    update: sinon.SinonSpy;
};

function createComponents(length: number): ReadonlyArray<ComponentSpy> {
    return times(() => {
        return {
            update: sinon.spy(),
        };
    }, length);
}

describe('core/CompositeComponent', () => {
    let components: ReadonlyArray<ComponentSpy>;

    beforeEach(() => {
        components = createComponents(5);
    });
    describe('#update', () => {
        it('should run each systems update once', () => {
            compositeUpdate(components, 100, 8);
            expect(
                components.filter(system => system.update.calledOnce).length
            ).to.equal(components.length);
        });
    });
});
