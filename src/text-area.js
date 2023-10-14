export default function textArea(ui, text, width, height, overrides = {}) {
  const p = Object.assign({}, ui, overrides);

  const left = ui.x + p.marginH;
  const top = ui.y + p.marginV;

  ui.ctx.fillStyle = p.bgColour;

  if (p.scaleToFit) {
    const measurement = ui.ctx.measureText(text);
    width = measurement.width;
    //height = measurement.height;
  }

  ui.ctx.fillRect(left, top, width + p.paddingH * 2, height + p.paddingV * 2);

  ui.ctx.font = p.font;
  ui.ctx.textAlign = p.textAlign;
  ui.ctx.textBaseline = p.textBaseline;
  ui.ctx.fillStyle = p.fgColour;

  const textTop = top + p.paddingV + height / 2;
  ui.ctx.fillText(text, left + p.paddingH, textTop);

  ui.y = top + p.paddingV + height + p.paddingV + p.marginV;
}
