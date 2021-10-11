import Sprite from "./sprite";
import { buildLevel, level1 } from './levels'
import { inputHandler } from './input'

export default class Game {
    constructor(gameWidth, gameHeight, ctx) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight

        this.sprite = new Sprite(this);

        inputHandler(this.sprite);
    }

    draw(ctx) {
        this.sprite.draw(ctx)
        buildLevel(ctx)
    }

    update(timeDelta, ctx){
        this.sprite.update(timeDelta);
        buildLevel(ctx)
    }

}