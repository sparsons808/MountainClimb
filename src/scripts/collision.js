export function collision(sprite, object) {
    
    let leftCorner = Math.floor(sprite.game.gameWidth - sprite.position.x)

    let xDistanceCenter = sprite.width / 2 + object.width / 2
    let yDistanceCenter = sprite.height / 2 + object.height / 2


    // if(distanceFromObject(sprite, object)  ){
    //     sprite.Yvelocity += 25
    // }
    
    if(distanceFromObject(sprite, object) < yDistanceCenter) {
        return true       
    } 


    // } else if (distanceFromObject(sprite, object) > yDistanceCenter && distanceFromObject(sprite, object) < xDistanceCenter){
    //     // console.log('hit')
    // }
}

// us parag

export function distanceFromObject(sprite, object) {
    let horizontalDistance = (object.position.x + object.width / 2) - (sprite.position.x + sprite.width / 2) 
    let verticalDistance = (object.position.y + object.height / 2) - (sprite.position.y + sprite.height / 2)

    return Math.sqrt(Math.pow(horizontalDistance, 2) + Math.pow(verticalDistance, 2));
}

