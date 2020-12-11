import { create as createUI, start as startUI, end as endUI } from './lib/ui.mjs';
import button from './lib/button.mjs';
import textArea from './lib/text-area.mjs';

function render(ui) {

    startUI(ui, mouseX, mouseY, mouseUp, mouseDown);

    textArea(ui, 0, 'Here is some waffle', 100, 40);
    
    if(button(ui, 1, 'Press Me!', 100, 30)) {
        console.log('Button 1 pressed');
    }

    if(button(ui, 2, 'Or Me!', 100, 30)) {
        console.log('Button 2 pressed');
    }
    
    endUI(ui);
    
    window.requestAnimationFrame(() => render(ui));
}

const canvas = document.getElementById('canvas');

let mouseX = 0; 
let mouseY = 0;
let mouseUp = false;
let mouseDown = false;

canvas.addEventListener('mousemove', (evt) => {
    mouseX = evt.offsetX;
    mouseY = evt.offsetY;
});
canvas.addEventListener('mouseup', (evt) => {
    mouseUp = true;
    mouseDown = false;
});
canvas.addEventListener('mouseout', (evt) => {
    mouseX = -1;
    mouseY = -1;
});
canvas.addEventListener('mousedown', (evt) => {
    mouseDown = true;
    mouseUp = false;
});

const ui = createUI(canvas, { margin: 4 });  
render(ui);  