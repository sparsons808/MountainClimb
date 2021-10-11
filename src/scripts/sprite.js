export default class Sprite {
    constructor(game) {
        this.game = game
        this.speed = { x: 4, y: 2}
        this.totalSpeed = 10
        this.position = {x: 0, y: 375}
        this.width = 16
        this.height = 16

    }

    draw(ctx) {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }

    moveLeft() {
        this.speed.x = -this.totalSpeed
    }

    moveRight() {
        this.speed.x = this.totalSpeed
    }

    moveUp() {
        this.speed.y = -this.totalSpeed
    }

    falling() {
        this.speed.y = this.totalSpeed
    }

    stop() {
        this.speed = 0
    }
}