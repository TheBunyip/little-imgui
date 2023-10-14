export default function (ui, width, height, overrides = {}) {
  const p = Object.assign({}, ui, overrides);

  const left = ui.x + p.marginH;
  const top = ui.y + p.marginV;

  ui.ctx.fillStyle = p.bgColour;
  ui.ctx.fillRect(left, top, width, height);

  ui.y = top + p.marginV;
  ui.x = left;
}
