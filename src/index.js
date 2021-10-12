import Game from './scripts/game'
// import { collision } from './scripts/collision'


document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.querySelector('.screen')
    let ctx = canvas.getContext("2d");

    const GAME_WIDTH = 450;
    const GAME_HEIGHT = 500;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

    let game = new Game(GAME_WIDTH, GAME_HEIGHT)

    // lava make one that is 450 by 500 in hieght

    let time = 0
    game.start();
    function engine(currentTime) {
        let dT = currentTime - time
        time = currentTime


        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

        
        game.update(dT);
        game.draw(ctx)



        requestAnimationFrame(engine);
    }

        

        requestAnimationFrame(engine);

    



    // const tileMap = document.querySelector('#tile_set');
    // ctx.fillStyle = 'black';
    // ctx.fillRect(10, 10, 45, 45);
    
    
})