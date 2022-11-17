import * as util from "./util";

export default function button(ui, id, text, width, height) {
  let result = false;

  const left = ui.x + ui.margin;
  const top = ui.y + ui.margin;

  if (util.inside(ui.mouseX, ui.mouseY, left, top, width, height)) {
    ui.hotID = id;
  }

  if (ui.activeID === id) {
    ui.ctx.fillStyle = ui.activeBgColour;
    ui.ctx.strokeStyle = ui.activeFgColour;

    if (ui.mouseUp) {
      if (ui.hotID === id) {
        result = true;
      }
      delete ui.activeID;
    }
  } else if (ui.hotID === id) {
    ui.ctx.fillStyle = ui.hotBgColour;
    ui.ctx.strokeStyle = ui.hotFgColour;

    if (ui.mouseDown) {
      ui.activeID = id;
    }
  } else {
    ui.ctx.fillStyle = ui.bgColour;
    ui.ctx.strokeStyle = ui.fgColour;
  }

  ui.ctx.fillRect(left, top, width, height);
  ui.ctx.strokeRect(left, top, width, height);

  ui.ctx.textAlign = "center";
  ui.ctx.textBaseline = "middle";
  ui.ctx.fillStyle = ui.ctx.strokeStyle;
  ui.ctx.fillText(text, left + width / 2, top + height / 2, width - 2);

  ui.y = top + height + ui.margin;

  return result;
}
