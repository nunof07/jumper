import { System } from '@src/core/System';
import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import * as Phaser from 'phaser';

export class TitleSystem implements System {
    private readonly scene: Phaser.Scene;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
    }

    public create(): void {
        const center = mainCameraCenter(this.scene);
        const text = this.scene.add.bitmapText(
            center.x,
            center.y,
            'nescyrillic',
            'Hello World',
            32
        );
        text.setOrigin(0.5, 0.5);
    }

    public update(_time: number, _delta: number): void {
        // nothing to do
    }
}
