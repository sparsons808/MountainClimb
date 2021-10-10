import Sprite from "./sprite";

export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight

        this.sprite = new Sprite(this);
    }

    draw(ctx) {
        this.sprite.draw(ctx)
    }
}