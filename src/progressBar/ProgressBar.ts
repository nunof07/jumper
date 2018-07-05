import { Destroyable } from '@src/core/Destroyable';
import * as Phaser from 'phaser';

export class ProgressBar implements Destroyable {
    private readonly graphics: Phaser.GameObjects.Graphics;
    private readonly bar: Phaser.Geom.Rectangle;
    private readonly complete: Phaser.Geom.Rectangle;

    constructor(
        graphics: Phaser.GameObjects.Graphics,
        bar: Phaser.Geom.Rectangle,
        complete: Phaser.Geom.Rectangle
    ) {
        this.graphics = graphics;
        this.bar = bar;
        this.complete = complete;
    }

    public render(): void {
        this.graphics.strokeRectShape(this.bar).fillRectShape(this.complete);
    }

    public update(progress: number): void {
        this.complete.width = progress * this.bar.width;
    }

    public destroy(): void {
        this.graphics.destroy();
    }
}
