export function create(canvas, params) {
  params = params || {};
  return {
    ctx: canvas.getContext("2d"),
    bgColour: params.bgColour || "black",
    fgColour: params.fgColour || "white",
    hotBgColour: params.hotBgColour || "grey",
    hotFgColour: params.hotFgColour || "white",
    activeBgColour: params.activeBgColour || "red",
    activeFgColour: params.activeFgColour || "white",
    marginV: Number.isInteger(params.marginV) ? params.marginV : 2,
    marginH: Number.isInteger(params.marginH) ? params.marginH : 2,
    paddingV: Number.isInteger(params.paddingV) ? params.paddingV : 2,
    paddingH: Number.isInteger(params.paddingH) ? params.paddingH : 2,
    x: 0,
    y: 0,
    hotID: null, // about to interact with this UI item
    activeID: null, // interacting with this UI item
  };
}

export function start(ui, x, y, mouseX, mouseY, mouseUp, mouseDown) {
  ui.x = x;
  ui.y = y + ui.marginV;
  ui.mouseX = mouseX;
  ui.mouseY = mouseY;
  ui.mouseUp = mouseUp;
  ui.mouseDown = mouseDown;
}

export function end(ui, autoFitToHeight) {
  delete ui.hotID;


  if(autoFitToHeight && ui.ctx.canvas.height !== ui.y) {
    ui.ctx.canvas.height = ui.y;
  }
}
