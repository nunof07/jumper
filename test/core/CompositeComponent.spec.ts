import { CompositeComponent } from '@src/core/CompositeComponent';
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
    let composite: CompositeComponent;
    let components: ReadonlyArray<ComponentSpy>;

    beforeEach(() => {
        components = createComponents(5);
        composite = new CompositeComponent(components);
    });
    describe('#update', () => {
        it('should run each systems update once', () => {
            composite.update(100, 8);
            expect(
                components.filter(system => system.update.calledOnce).length
            ).to.equal(components.length);
        });
    });
});
