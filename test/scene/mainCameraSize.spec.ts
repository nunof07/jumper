import { asType } from '@src/core/asType';
import { mainCameraSize } from '@src/scene/mainCameraSize';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('scene', () => {
    describe('#mainCameraSize', () => {
        it('should return multiple of camera size', () => {
            const mockScene = asType<Phaser.Scene>({
                cameras: {
                    main: { width: 100, height: 100 },
                },
            });
            expect(mainCameraSize(mockScene, 2, 2)).to.deep.equal({
                width: 200,
                height: 200,
            });
        });
    });
});
