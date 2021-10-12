export function collison(sprite, object) {
    
    let topOfSprite = sprite.position.y
    
    let bottomOfSprite = sprite.position.y + sprite.height
    let leftOfSprite = sprite.position.x
    let rightOfSprite = sprite.position.x + sprite.width
    
    let topOfObject = object.position.y
    let bottomOfObject = object.position.y + object.height
    let leftSideOfObject = object.position.x
    let rightSideOfObject = object.position.x + object.width

    // if(topOfSprite >= bottomOfObject &&
    //     bottomOfSprite <= topOfObject &&
    //     leftOfSprite >= leftSideOfObject &&
    //     rightOfSprite <= rightSideOfObject) {
    //         return true;
    // } else return false;

    let xDistanceCenter = sprite.width / 2 + object.width / 2 - 4
    let yDistanceCenter = sprite.height / 2 + object.height / 2 - 1

    if(topOfSprite === bottomOfObject){
        sprite.speedY = sprite.speedY
    }

    
    if(distanceFromObject(sprite, object) < yDistanceCenter && distanceFromObject(sprite, object) < xDistanceCenter) {
        sprite.speedY = 0
        sprite.position.y = topOfObject - sprite.height
    }
    // } else if (distanceFromObject(sprite, object) > yDistanceCenter && distanceFromObject(sprite, object) < xDistanceCenter){
    //     // console.log('hit')
    // }
}

// us parag

function distanceFromObject(sprite, object) {
    let horizontalDistance = (object.position.x + object.width / 2) - (sprite.position.x + sprite.width / 2) 
    let verticalDistance = (object.position.y + object.height / 2) - (sprite.position.y + sprite.height / 2)

    return Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2));
}

