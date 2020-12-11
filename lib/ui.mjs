export function create(canvas, params) {
    params = params || {};
    return {
        ctx: canvas.getContext('2d'),
        bgColour: params.bgColour || 'black',
        fgColour: params.fgColour || 'white',
        hotBgColour: params.hotBgColour || 'grey',
        hotFgColour: params.hotFgColour || 'white',
        activeBgColour: params.activeBgColour || 'red',
        activeFgColour: params.activeFgColour || 'white',
        margin: Number.isInteger(params.margin) ? params.margin : 2, 
        x: 0,
        y: 0,
        hotID: null, // about to interact with this UI item
        activeID: null // interacting with this UI item
    };
}

export function start(ui, mouseX, mouseY, mouseUp, mouseDown) {
    ui.x = 0;
    ui.y = 0;
    ui.mouseX = mouseX;
    ui.mouseY = mouseY;
    ui.mouseUp = mouseUp;
    ui.mouseDown = mouseDown;

    ui.ctx.fillStyle = ui.bgColour;
    ui.ctx.fillRect(0, 0, ui.ctx.canvas.width, ui.ctx.canvas.height);
}

export function end(ui) {
    delete ui.hotID;
}