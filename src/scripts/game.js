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
    LAVAKILL: 5,
    RESTARTLEVEL: 6
}

export default class Game {
    constructor(gameWidth, gameHeight, ctx) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight

        this.lives = 3  
        // losses lives and restarts to begining of level when
        // player falls to the bottom or into the lava
        this.level = [level1]

        this.currentLevel = 0
        this.objects = [];
        this.state = STATE.MENU;
        // this.gameState = STATE.MENU;

        this.sprite = new Sprite(this);

        inputHandler(this.sprite);

        this.heart = new Image()
        this.heart.src = './assets/heart.png'
    };

    start() {
        // debugger
        this.objects = buildLevel(this, this.level[this.currentLevel]);
        // debugger
    }

    draw(ctx) {
        // debugger
        this.sprite.draw(ctx)

        for (let i = 0; i < 3; i++) {
              
        }

        this.objects.forEach( (object) => {
            object.draw(ctx)
        })
    }

    update(timeDelta){
        this.sprite.update(timeDelta);

        this.objects.forEach( (object) => {
            object.update(timeDelta)
        })

        // inputHandler(this.sprite);

        // buildLevel(ctx)
    }

    resetLevel() {
        if(this.state === STATE.LAVAKILL && this.lives > 0) {
            this.lives -= 1


        }
        
    }

}