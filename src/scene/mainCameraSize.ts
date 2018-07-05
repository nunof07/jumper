import { Size } from '@src/core/Size';
import * as Phaser from 'phaser';

export function mainCameraSize(
    scene: Phaser.Scene,
    multX: number,
    multY: number
): Size {
    return {
        width: scene.cameras.main.width * multX,
        height: scene.cameras.main.height * multY,
    };
}
