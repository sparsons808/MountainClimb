
import { collision } from "./collision";

export function inputHandler(sprite) {

    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        // console.log(event.keyCode);
        switch(event.keyCode) {
            case 39:
                sprite.state.right = true
                break;
            case 37:
                sprite.state.left = true
                break;
            case 32:
                sprite.state.up = true
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
                break;
            case 37:
                sprite.state.left = false
                break;
            case 32:
                sprite.state.up = false
                // sprite.jumping = false
                break;
        }
    }) 

}