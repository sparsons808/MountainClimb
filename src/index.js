import Game from './scripts/game'


document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.querySelector('.screen')
    let ctx = canvas.getContext("2d");

    const GAME_WIDTH = 450;
    const GAME_HEIGHT = 500;

    let game = new Game(GAME_WIDTH, GAME_HEIGHT)

    // lava make one that is 450 by 500 in hieght

    let time = 0

    function engine(currentTime) {
        let dT = currentTime - time
        time = currentTime


        ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)

        let tileSheet = new Image()
        tileSheet.src = './assets/block.png'

        let lava = new Image()
        lava.src = './assets/lava.png'
        
        lava.addEventListener('load', () => {
            // debugger
            ctx.drawImage(lava, 0, 450)
            ctx.drawImage(lava, 100, 450)
            ctx.drawImage(lava, 200, 450)
            ctx.drawImage(lava, 300, 450)
            ctx.drawImage(lava, 400, 450)

        })

        tileSheet.addEventListener('load', () => {
            ctx.drawImage(tileSheet, 0, 400, 35, 25);
            ctx.drawImage(tileSheet, 30, 400, 35, 25);
            ctx.drawImage(tileSheet, 60, 400, 35, 25);
            ctx.drawImage(tileSheet, 90, 400, 35, 25);
            ctx.drawImage(tileSheet, 120, 400, 35, 25);
            ctx.drawImage(tileSheet, 150, 400, 35, 25);
            ctx.drawImage(tileSheet, 180, 400, 35, 25);
            ctx.drawImage(tileSheet, 240, 360, 35, 25);
            ctx.drawImage(tileSheet, 300, 320, 35, 25);
            ctx.drawImage(tileSheet, 240, 280, 35, 25);
            ctx.drawImage(tileSheet, 210, 280, 35, 25);
            ctx.drawImage(tileSheet, 180, 280, 35, 25);
            ctx.drawImage(tileSheet, 150, 280, 35, 25);
            ctx.drawImage(tileSheet, 120, 280, 35, 25);
            ctx.drawImage(tileSheet, 90, 280, 35, 25);
        }, false)


        game.update(dT, ctx);
        game.draw(ctx)

        requestAnimationFrame(engine);
    }

        

        requestAnimationFrame(engine);

    



    // const tileMap = document.querySelector('#tile_set');
    // ctx.fillStyle = 'black';
    // ctx.fillRect(10, 10, 45, 45);
    
    
})