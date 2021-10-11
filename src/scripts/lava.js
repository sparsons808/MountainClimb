export default class Lava {
    constructor(game, position) {
        this.game = game;
        this.position = position;

        this.speed = 2;
        

        this.lava = new Image();
        this.lava.src = './assets/lava.png'
    }

    draw(ctx) {
        ctx.drawImage(
            this.lava,
            this.position.y,
            this.position.x
        )
    }

    update(timeDelta) {
        this.position.y += this.speed;
    }
}