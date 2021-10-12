import { collison } from "./collision";

export default class Block {
    constructor(game, position) {
        this.game = game;
        this.position = position;

        this.block = new Image()
        this.block.src = './assets/block.png'

        this.width = 35;
        this.height = 25;
    }

    draw(ctx) {
        // debugger
        this.block.onload = ctx.drawImage(
            this.block,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }

    update(timeDeltal) {
        collison(this.game.sprite, this)
    }
}