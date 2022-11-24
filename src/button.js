import * as util from "./util.js";

export default function button(ui, id, text, width, height, params={}) {
  let result = false;
  let left = ui.x + ui.margin;
  let top = ui.y;

  const padding = params.padding || ui.padding;

  if (util.inside(ui.mouseX, ui.mouseY, left, top, width + padding * 2, height + padding * 2)) {
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

  ui.ctx.fillRect(left, top, width + padding * 2, height + padding * 2);
  ui.ctx.strokeRect(left, top, width + padding * 2, height + padding * 2);
  
  ui.ctx.font = params.font || "14px monospace";
  ui.ctx.textAlign = params.alignment || "center";
  ui.ctx.textBaseline = "middle";
  ui.ctx.fillStyle = ui.ctx.strokeStyle;

  const fillWidth = params.overlap ? undefined : width;
  const textTop = top + padding + height / 2;
  if(ui.ctx.textAlign === "left") {
    ui.ctx.fillText(text, left + padding, textTop, fillWidth);
  } else if (ui.ctx.textAlign === "right") {
    ui.ctx.fillText(text, left + padding + width, textTop, fillWidth);
  } else {
    //ui.ctx.fillText(text, left + padding + width / 2, top + padding + height / 2);
    ui.ctx.fillText(text, left + padding + width / 2, textTop, fillWidth);
  }

  ui.y = top + padding + height + padding + ui.margin;

  return result;
}
