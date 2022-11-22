import * as util from "./util.js";

export default function button(ui, id, text, width, height, params={}) {
  let result = false;
  let left = ui.x + ui.margin;
  let top = ui.y + ui.margin;

  const padding = params.padding || ui.padding;

  if (util.inside(ui.mouseX, ui.mouseY, left, top, width + padding, height + padding)) {
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
  
  // adjust dimensions for padding
  width = params.scaleToFit ? ui.ctx.measureText(text).width : width;

  if(ui.ctx.textAlign === "left") {
    ui.ctx.fillText(text, left + padding, top + padding + height / 2, params.scaleToFit ? width : undefined);
  } else if (ui.ctx.textAlign === "right") {
    ui.ctx.fillText(text, left + width, top + padding + height / 2);
  } else {
    ui.ctx.fillText(text, left + width / 2, top + padding + height / 2);
  }

  ui.y = top + padding + height + padding + ui.margin;
  
  ui.maxWidth = Math.max(ui.maxWidth, left + padding + width + padding + ui.margin);

  return result;
}
