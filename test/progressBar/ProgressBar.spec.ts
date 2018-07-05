import { asType } from '@src/core/asType';
import { ProgressBar } from '@src/progressBar/ProgressBar';
import { expect } from 'chai';
import * as Phaser from 'phaser';

describe('ProgressBar', () => {
    describe('#update', () => {
        it('should update complete portion of progress bar', () => {
            const width = 100;
            const height = 100;
            const graphics = asType<Phaser.GameObjects.Graphics>({});
            const barRect = new Phaser.Geom.Rectangle(0, 0, width, height);
            const completeRect = new Phaser.Geom.Rectangle(0, 0, width, height);
            const bar = new ProgressBar(graphics, barRect, completeRect);
            bar.update(0.25);
            expect(completeRect.width).to.equal(25);
        });
    });
});
