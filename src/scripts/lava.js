import { collision } from "./collision";

export default class Lava {
    constructor(game, position) {
        this.game = game;
        this.position = position;

        this.speed = .25;
        this.width = 100;
        this.height = 500;

        this.lavaKill = 5

        this.lava = new Image();
        this.lava.src = './assets/lava.png'
    }

    draw(ctx) {
        // debugger
        this.lava.onload = ctx.drawImage(
            this.lava,
            this.position.x,
            this.position.y
        )
    }

    update(timeDelta) {
        // if(this.position.y <= 100) this.stop();
        // this.position.y -= this.speed;

        // this type of collision will work for the lava
        if(collision(this.game.sprite, this)) {
            this.stop();
            this.game.state = this.lavaKill
            this.game.resetLevel();
        }
    }

    stop() {
        this.speed = 0
    }
}