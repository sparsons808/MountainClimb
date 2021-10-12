export function collison(sprite, object) {
    topOfSprite = sprite.position.y
    bottomOfSprite = sprite.position.y + sprite.height
    leftOfSprite = sprite.position.x
    rightOfSprite = sprite.position.x + sprite.width

    topOfObject = object.position.y
    bottomOfObject = object.position.y + object.height
    leftSideOfObject = object.position.x
    rightSideOfObject = object.position.x + object.width

    if(topofSprite === bottomOfObject &&
        leftOfspright >= leftSideOfObject &&
        rightOfSprite <= rightSideOfObject){
            sprite.falling();
    } else if (bottomOfSprite === topOfObject &&
        leftOfspright >= leftSideOfObject &&
        rightOfSprite <= rightSideOfObject){
            sprite.stopFalling()
        }
}