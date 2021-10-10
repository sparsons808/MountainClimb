export default class Sprite {
    constructor(game) {
        this.game = game
        this.speed = { x: 4, y: 2}

        this.position = {x: 0, y: 400}
        this.width = 16
        this.height = 16

    }

    draw(ctx) {
        ctx.fillStyle = 'green'
        ctx.fillRect(0, 350, this.width, this.height)
    }

    update() {

    }
}