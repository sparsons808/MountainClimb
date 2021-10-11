import Sprite from "./sprite";
import { buildLevel } from './levels'
import { inputHandler } from './input'

export default class Game {
    constructor(gameWidth, gameHeight, ctx) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight

        this.sprite = new Sprite(this);

        buildLevel(ctx);
        inputHandler(this.sprite);
    }

    draw(ctx) {
        this.sprite.draw(ctx)
        buildLevel(ctx)
    }

    update(timeDelta){
        this.sprite.update(timeDelta);
        
    }

}