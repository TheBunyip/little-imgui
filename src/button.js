import * as util from "./util.js";

export default function button(ui, id, text, width, height, overrides = {}) {
  const p = Object.assign({}, ui, overrides);

  let result = false;
  let left = ui.x + p.marginH;
  let top = ui.y + p.marginV;

  if (
    util.inside(
      ui.mouseX,
      ui.mouseY,
      left,
      top,
      width + p.paddingH * 2,
      height + p.paddingV * 2
    )
  ) {
    ui.hotID = id;
  }

  if (ui.activeID === id) {
    ui.ctx.fillStyle = p.activeBgColour;
    ui.ctx.strokeStyle = p.activeFgColour;

    if (ui.mouseUp) {
      if (ui.hotID === id) {
        result = true;
      }
      delete ui.activeID;
    }
  } else if (ui.hotID === id) {
    ui.ctx.fillStyle = p.hotBgColour;
    ui.ctx.strokeStyle = p.hotFgColour;

    if (ui.mouseDown) {
      ui.activeID = id;
    }
  } else {
    ui.ctx.fillStyle = p.bgColour;
    ui.ctx.strokeStyle = p.fgColour;
  }

  ui.ctx.fillRect(left, top, width + p.paddingH * 2, height + p.paddingV * 2);
  ui.ctx.strokeRect(left, top, width + p.paddingH * 2, height + p.paddingV * 2);

  ui.ctx.font = p.font;
  ui.ctx.textAlign = p.textAlign;
  ui.ctx.textBaseline = p.textBaseline;
  ui.ctx.fillStyle = ui.ctx.strokeStyle;

  const fillWidth = p.overlap ? undefined : width;
  const textTop = top + p.paddingV + height / 2;
  if (ui.ctx.textAlign === "left") {
    ui.ctx.fillText(text, left + p.paddingH, textTop, fillWidth);
  } else if (ui.ctx.textAlign === "right") {
    ui.ctx.fillText(text, left + p.paddingH + width, textTop, fillWidth);
  } else {
    ui.ctx.fillText(text, left + p.paddingH + width / 2, textTop, fillWidth);
  }

  ui.y = top + p.paddingV + height + p.paddingV + p.marginV;

  return result;
}
