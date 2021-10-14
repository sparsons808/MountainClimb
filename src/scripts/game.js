import Sprite from "./sprite";
import { buildLevel, level1 } from './levels'
import { inputHandler } from './input'
// import { collison } from "./collision";

const STATE = {
    MENU: 0,
    RUNNING: 1,
    PAUSED: 2,
    NEWLEVEL: 3,
    GAMEOVER: 4,
    RESTARTLEVEL: 5,
}

export default class Game {
    constructor(gameWidth, gameHeight, ctx) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight

        this.state = STATE.MENU;

        this.lives = 3  
        // losses lives and restarts to begining of level when
        // player falls to the bottom or into the lava
        this.level = [level1]

        this.currentLevel = 0
        this.objects = [];
        

        this.sprite = new Sprite(this);

        this.menu = new Image();
        this.menu.src = './assets/menu.png'

        inputHandler(this.sprite, this);

        this.heart = new Image()
        this.heart.src = './assets/heart.png'

        this.pause = new Image();
        this.pause.src = './assets/paused.png'
    };

    start() {
        if(this.state != STATE.MENU && 
        this.state != STATE.RESTARTLEVEL &&
        this.state != STATE.NEWLEVEL) return;
        
        this.sprite.reset()

        this.objects = buildLevel(this, this.level[this.currentLevel]);

        this.state = STATE.RUNNING
        // debugger
    }

    draw(ctx) {

        this.sprite.draw(ctx)

        this.objects.forEach( (object) => {
            object.draw(ctx)
        })

        

        if(this.state === STATE.RESTARTLEVEL){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            ctx.fillStyle = 'rgb(0, 0, 0, 0.5)'
            ctx.fill();
            
            if(this.lives === 2) {
                this.heart.onload = ctx.drawImage(this.heart,
                    this.gameWidth / 2 - 12,
                    this.gameHeight / 2 - 5,
                    10,
                    10
                )

                this.heart.onload = ctx.drawImage(this.heart,
                    this.gameWidth / 2 + 2,
                    this.gameHeight / 2 - 5,
                    10,
                    10
                )
            } else if(this.lives === 1) {
                this.heart.onload = ctx.drawImage(this.heart,
                    this.gameWidth / 2 - 5,
                    this.gameHeight / 2 - 5,
                    10,
                    10
                )
            }
        }

        if(this.state === STATE.MENU){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight)
            this.menu.onload = ctx.drawImage(this.menu, 0, 0, 450, 500);
        }

        if(this.state === STATE.PAUSED) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = 'rgb(0, 0, 0, 0.5)'
            ctx.fill();
            this.pause.onload = ctx.drawImage(this.pause,
                this.gameWidth / 2 - 75,
                this.gameHeight / 2 - 20,
                150,
                40
            )
        }
        
    }

    update(){
        
        if(this.state === STATE.RESTARTLEVEL || 
        this.state === STATE.MENU || 
        this.state === STATE.PAUSED) {
            return;
            // debugger
        }

        this.sprite.update();

        this.objects.forEach( (object) => {
            object.update()
        })


        // inputHandler(this.sprite);

        // buildLevel(ctx)
    }

    pauseGame() {
        
        if(this.state === STATE.RUNNING) {
            this.state = STATE.PAUSED
        } else {
            this.state = STATE.RUNNING
        }
    }


}