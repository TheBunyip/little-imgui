import {
  button,
  textArea,
  create as createUI,
  start as startUI,
  end as endUI,
} from "../src/index.js";

function render(ui) {
  // ui.ctx.fillStyle = ui.bgColour;
  // ui.ctx.fillRect(0, 0, ui.ctx.canvas.width, ui.ctx.canvas.height);

  startUI(ui, 0, 0, ui.mouseX, ui.mouseY, ui.mouseUp, ui.mouseDown);

  textArea(ui, "Here is some really quite long waffley stuff", 250, 30, { scaleToFit: false, font: "10px monospace" });

  if (button(ui, 0, "Left aligned button", 250, 30, { alignment: "left" })) {
    console.log("Button 1");
  }
  
  if (button(ui, 1, "...with padding", 250, 30, { alignment: "left", paddingV: 10, paddingH: 10 })) {
    console.log("Button 2");
  }

  if (button(ui, 2, "Center aligned button", 250, 30, { alignment: "center" })) {
    console.log("Button 3");
  }
  
  if (button(ui, 3, "...with padding", 250, 30, { alignment: "center", paddingH: 10 })) {
    console.log("Button 4");
  }

  if (button(ui, 4, "Right aligned button", 250, 30, { alignment: "right" })) {
    console.log("Button 5");
  }
  
  if (button(ui, 5, "...with padding", 250, 30, { alignment: "right", paddingH: 10 })) {
    console.log("Button 6");
  }

  endUI(ui, true);

  window.requestAnimationFrame(() => render(ui));
}


const uis = [];

uis.push((function firstCanvas() {
  const canvas = document.createElement("canvas");  
  canvas.width = 200;
  canvas.height = 200;
  document.body.appendChild(canvas);

  const ui = createUI(canvas, { margin: 0, padding: 10, bgColour: "seagreen" });
  registerInputHandlers(ui);
  render(ui);
  window.requestAnimationFrame(() => render(ui));
  return ui;
})());


function registerInputHandlers(ui) {
  ui.mouseX = 0;
  ui.mouseY = 0;
  ui.mouseUp = false;
  ui.mouseDown = false;

  ui.ctx.canvas.addEventListener("mousemove", (evt) => {
    ui.mouseX = evt.offsetX;
    ui.mouseY = evt.offsetY;
  });
  ui.ctx.canvas.addEventListener("mouseup", (evt) => {
    ui.mouseUp = true;
    ui.mouseDown = false;
  });
  ui.ctx.canvas.addEventListener("mouseout", (evt) => {
    ui.mouseX = -1;
    ui.mouseY = -1;
  });
  ui.ctx.canvas.addEventListener("mousedown", (evt) => {
    ui.mouseDown = true;
    ui.mouseUp = false;
  });
}