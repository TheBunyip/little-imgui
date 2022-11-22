export default function textArea(ui, text, width, height, params={}) {
  const left = ui.x + ui.margin;
  const top = ui.y + ui.margin;

  ui.ctx.fillStyle = ui.bgColour;

  const padding = params.padding || ui.padding;

  if(params.scaleToFit) {
    const measurement = ui.ctx.measureText(text);
    width = measurement.width;
    //height = measurement.height;
  }
  
  ui.ctx.fillRect(left, top, width + padding * 2, height + padding * 2);

  ui.ctx.font = params.font || "14px monospace";
  ui.ctx.textAlign = params.textAlign || "left";
  ui.ctx.textBaseline = "top";
  ui.ctx.fillStyle = ui.fgColour;

  ui.ctx.fillText(text, left + padding, top + padding);

  ui.y = top + padding + height + padding + ui.margin;

  ui.maxWidth = Math.max(ui.maxWidth, left + padding + width + padding + ui.margin);
}