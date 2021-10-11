
export function inputHandler(sprite) {

    document.addEventListener('keydown', (event) => {
        switch(event.keyCode) {
            case 39:
                sprite.moveRight();
                break;
            case 37:
                sprite.moveLeft();
                break;
        }
    });

    document.addEventListener('keyup', (event) => {
        switch(event.keyCode) {
            case 39:
                if (sprite.speed.x > 0) sprite.stop()
                break;
            case 37:
                if(sprite.speed.x < 0) sprite.stop()
                break;
            case 32:
                sprite.falling();
                break;

                //  13.88 pixels persecond is gravity figure out out to find time to find out velocity
                // velocity = .4629px
        }
    }) 

}