export function buildLevel(ctx) {

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
}