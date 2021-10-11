export default class Sprite {
    constructor(game) {
        this.game = game
        this.speedX = 0
        this.speedY = 0
        this.totalSpeed = 6
        this.position = {x: 200, y: 375}
        this.width = 16
        this.height = 16
        this.velocity = 0.462
    }

    draw(ctx) {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update(timeDelta) {
        this.position.x += this.speedX
        this.position.y += this.speedY

        if(this.position.x + this.width > this.game.gameWidth) {
            this.position.x = this.game.gameWidth - this.width;
        }

        if(this.position.x < 0) this.position.x = 0;

        if(this.position.y - this.height === this.game.gameHeight){
            reset();
        }

        // if (this.position.y > this.game.gameHeight) {
        //     this.position.y = this.game.gameHeight - this.height
        // }
    }

    moveLeft() {
        this.speedX = -this.totalSpeed
    }

    moveRight() {
        this.speedX = this.totalSpeed
    }

    moveUp() {
        this.speedY = -this.totalSpeed - this.velocity
    }

    falling() {
        this.speedY = this.totalSpeed / 2
    }

    stop() {
        this.speedX = 0
    }

    // reset() {
    //     this.position.y = 375
    //     this.position.x = 200
    // }
}