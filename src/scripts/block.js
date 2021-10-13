import { collision } from "./collision";

export default class Block {
    constructor(game, position) {
        this.game = game;
        this.position = position;

        this.block = new Image()
        this.block.src = './assets/block.png'

        this.width = 24;
        this.height = 24;
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
        if(collision(this.game.sprite, this)){
            this.game.sprite.Yvelocity = 0
            this.game.sprite.jumping = false
            this.game.sprite.position.y = this.position.y - this.game.sprite.height 
        }
        
    }
}