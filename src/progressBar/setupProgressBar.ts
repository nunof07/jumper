import { addProgressBar } from '@src/progressBar/addProgressBar';
import { renderProgressBar } from '@src/progressBar/renderProgressBar';
import { updateProgressBar } from '@src/progressBar/updateProgressBar';
import { mainCameraCenter } from '@src/scene/mainCameraCenter';
import * as Phaser from 'phaser';

function createGraphics(scene: Phaser.Scene): Phaser.GameObjects.Graphics {
    return scene.add.graphics({
        x: 0,
        y: 0,
        fillStyle: {
            color: 0xffffff,
            alpha: 1,
        },
        lineStyle: {
            width: 2,
            color: 0xffffff,
            alpha: 1,
        },
    });
}

export function setupProgressBar(scene: Phaser.Scene): void {
    const graphics = createGraphics(scene);
    const size = {
        width: scene.cameras.main.width / 3,
        height: scene.cameras.main.width / 30,
    };
    let bar = addProgressBar(mainCameraCenter(scene), size);
    scene.load.on('progress', (progress: number) => {
        bar = updateProgressBar(bar, progress);
        renderProgressBar(graphics, bar);
    });
    scene.load.on('complete', () => {
        graphics.destroy();
    });
}
