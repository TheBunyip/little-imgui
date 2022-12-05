export default function textArea(ui, text, width, height, params={}) {
  const left = ui.x + ui.marginH;
  const top = ui.y;

  ui.ctx.fillStyle = ui.bgColour;

  const paddingV = params.paddingV || ui.paddingV;
  const paddingH = params.paddingH || ui.paddingH;

  if(params.scaleToFit) {
    const measurement = ui.ctx.measureText(text);
    width = measurement.width;
    //height = measurement.height;
  }
  
  ui.ctx.fillRect(left, top, width + paddingH * 2, height + paddingV * 2);

  ui.ctx.font = params.font || "14px monospace";
  ui.ctx.textAlign = params.textAlign || "left";
  ui.ctx.textBaseline = "top";
  ui.ctx.fillStyle = ui.fgColour;

  ui.ctx.fillText(text, left + paddingH, top + paddingV);

  ui.y = top + paddingV + height + paddingV + ui.marginV;
}