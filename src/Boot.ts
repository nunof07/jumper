import { ProgressBarFactory } from '@src/progressBar/ProgressBarFactory';
import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import { mainCameraSize } from '@src/scene/mainCameraSize';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import * as Phaser from 'phaser';

export class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot' });
    }

    public preload(): void {
        new ProgressBarFactory(
            this,
            mainCameraSize(this, 1 / 3, 1 / 30),
            mainCameraCenter(this)
        ).create();
        setupCamerasResize(this);
        this.load.on('complete', () => {
            this.scene.start('game');
        });
        this.load.pack('manifest', 'manifest.json');
    }
}
