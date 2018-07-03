import { CompositeSystem } from '@src/core/CompositeSystem';
import { setupCamerasResize } from '@src/scene/setupCamerasResize';
import { TitleSystem } from '@src/TitleSystem';
import * as Phaser from 'phaser';

export class Game extends Phaser.Scene {
    private readonly systems: CompositeSystem;

    constructor() {
        super({ key: 'game' });
        this.systems = new CompositeSystem([new TitleSystem(this)]);
    }

    public preload(): void {
        setupCamerasResize(this);
    }

    public create(): void {
        this.systems.create();
    }

    public update(time: number, delta: number): void {
        this.systems.update(time, delta);
    }
}
