export default function textArea(ui, id, text, width, height, font) {
  const left = ui.x + ui.margin;
  const top = ui.y + ui.margin;

  ui.ctx.font = font ?? "14px monospace";
  ui.ctx.textAlign = "left";
  ui.ctx.textBaseline = "top";
  ui.ctx.fillStyle = ui.fgColour;
  ui.ctx.fillText(text, left, top, width);

  ui.y = top + height + ui.margin;
}
