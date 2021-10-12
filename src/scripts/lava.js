export default class Lava {
    constructor(game, position) {
        this.game = game;
        this.position = position;

        this.speed = .25;
        this.width = 100;
        this.height = 500;

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
        this.position.y -= this.speed;
    }
}