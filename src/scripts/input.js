
export function inputHandler(sprite) {

    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        // console.log(event.keyCode);
        switch(event.keyCode) {
            case 39:
                sprite.moveRight();
                break;
            case 37:
                sprite.moveLeft();
                break;
        }
    });

    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        if(event.keyCode === 32) sprite.moveUp();
    })

    document.addEventListener('keyup', (event) => {
        event.preventDefault();
        switch(event.keyCode) {
            case 39:
                if (sprite.speedX > 0) sprite.stop()
                break;
            case 37:
                if(sprite.speedX < 0) sprite.stop()
                break;
            case 32:
                sprite.falling();
                break;

                //  13.88 pixels persecond is gravity figure out out to find time to find out velocity
                // velocity = .4629px
        }
    }) 

}