
export function inputHandler(sprite, game) {

    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        // alert(event.keyCode);
        // console.log(event.keyCode);
        switch(event.keyCode) {
            case 39:
                sprite.state.right = true
                break;
            case 37:
                sprite.state.left = true
                break;
            case 38:
                sprite.state.up = true
                break;
            case 32:
                game.start();
                break;
            case 27:
                game.pauseGame();
                break;
                
        }
    });


    // document.addEventListener('keydown', (event) => {
    //     event.preventDefault();
    //     if(event.keyCode === 32) {
    //         sprite.moveUp()
            
    //     }
    // })

    document.addEventListener('keyup', (event) => {
        event.preventDefault();
        switch(event.keyCode) {
            case 39:
                sprite.state.right = false
                sprite.Xvelocity = 0
                break;
            case 37:
                sprite.state.left = false
                sprite.Xvelocity = 0
                break;
            case 38:
                sprite.state.up = false
                // sprite.jumping = false
                break;
        }
    });

    const info = document.querySelector('.modal');
    const container = document.querySelector('.modal-container');

    info.addEventListener('click', (event) => {
        container.classList.add('live');
    });

    const close = document.querySelector('.close')

    close.addEventListener('click', (event) => {
        container.classList.remove('live');
    });
    
    

}