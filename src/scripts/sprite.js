import { collision, distanceFromObject } from "./collision"

export default class Sprite {
    constructor(game) {
        this.game = game
        this.speedX = 0
        this.speedY = 0
        this.gravity = 1
        this.friction = 0.9
        this.totalSpeed = 6
        this.position = {x: 0, y: 440}
        this.width = 16
        this.height = 16
        this.Xvelocity = 0
        this.Yvelocity = 0

        this.jumping = false

        this.state = {
            up: false,
            left: false,
            right: false
        }

        // to get the fall right have a y starting position and add speed times whatever
        // which will equal to the y ending point at which time the sprite will fall
        // collison math remeber that objects x and y coordinates on canvas
        // come from the left most corner
    }

    draw(ctx) {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

        
    }

    update(timeDelta) {


        if(this.state.up && this.jumping === false) {
            this.Yvelocity -= 25
            this.jumping = true 
        }

        if(this.state.left) {
            this.Xvelocity -= 0.25
        } 

        if(this.state.right) {
            this.Xvelocity += 0.25
        }

        this.Yvelocity += this.gravity
        
        this.position.x += this.Xvelocity
        this.position.y += this.Yvelocity
        
        this.Yvelocity *= 0.9
        this.Xvelocity *= 0.9


        

        if(this.position.x + this.width > this.game.gameWidth) {
            this.position.x = this.game.gameWidth - this.width;
        }


        if(this.position.x < 0) this.position.x = 0;

        if(this.position.y - this.height === this.game.gameHeight){
            // reset();
        }

        // for (let i = 0; i < this.game.objects.length; i++) {
        //     if(this.position.x > this.game.objects[i].position.x + this.game.objects[i].width ||
        //         this.position.x < this.game.objects[i].position.x &&
        //         this.position.y === this.game.objects[i].position.y){
        //         // console.log('falling')
        //         this.falling();
        //     }
            
        // }

        for (let i = 0; i < this.game.objects.length; i++) {
            if(collision(this, this.game.objects[i])){
                console.log('hit')
            }
            
        }



        // if (this.position.y > this.game.gameHeight) {
        //     this.position.y = this.game.gameHeight - this.height
        // }
    }

    // moveLeft() {
    //     this.speedX -= this.velocity
    //     this.velocity *= 0.9
    // }

    // moveRight() {
    //     this.speedX += this.velocity
    //     this.velocity *= 0.9
    // }

    // moveUp() {
    //     let startPos = this.position.y
    //     let endPos = startPos - this.height * 5
        

    //     this.speedY -= 5

        

    //     // this.stopFalling();
    //     // implement logic that goes like this
    //     // after the sprite has jumped 5times its hight it 
    //     // comes down
    // }

    // falling() {
    //     this.speedY = -this.speedY
        
    // }

    // stop() {            
    //     this.speedX = 0
    // }

    // stopFalling(){
    //     this.speedY = 0
    // }

}