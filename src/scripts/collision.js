export function collison(sprite, object) {
    
    let topOfSprite = sprite.position.y
    
    let bottomOfSprite = sprite.position.y + sprite.height
    let leftOfSprite = sprite.position.x
    let rightOfSprite = sprite.position.x + sprite.width
    
    let topOfObject = object.position.y
    let bottomOfObject = object.position.y + object.height
    let leftSideOfObject = object.position.x
    let rightSideOfObject = object.position.x + object.width

    if(topOfSprite >= bottomOfObject &&
        bottomOfSprite <= topOfObject &&
        leftOfSprite >= leftSideOfObject &&
        rightOfSprite <= rightSideOfObject) {
            return true;
    } else return false;
}