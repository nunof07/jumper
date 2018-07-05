import { Factory } from '@src/core/Factory';
import { Position } from '@src/core/Position';
import { Size } from '@src/core/Size';
import { ProgressBar } from '@src/progressBar/ProgressBar';
import * as Phaser from 'phaser';

export class ProgressBarFactory implements Factory<ProgressBar> {
    private readonly scene: Phaser.Scene;
    private readonly size: Size;
    private readonly position: Position;

    constructor(scene: Phaser.Scene, size: Size, position: Position) {
        this.scene = scene;
        this.size = size;
        this.position = position;
    }

    public create(): ProgressBar {
        const graphics = this.createGraphics();
        const complete = this.createComplete();
        const bar = Phaser.Geom.Rectangle.Clone(complete);
        const progressBar = new ProgressBar(graphics, bar, complete);
        this.scene.load.on('progress', (progress: number) => {
            progressBar.update(progress);
            progressBar.render();
        });
        this.scene.load.on('complete', () => {
            progressBar.destroy();
        });

        return progressBar;
    }

    private createGraphics(): Phaser.GameObjects.Graphics {
        return this.scene.add.graphics({
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

    private createComplete(): Phaser.Geom.Rectangle {
        const complete = new Phaser.Geom.Rectangle(
            0,
            0,
            this.size.width,
            this.size.height
        );
        Phaser.Geom.Rectangle.CenterOn(
            complete,
            this.position.x,
            this.position.y
        );

        return complete;
    }
}
