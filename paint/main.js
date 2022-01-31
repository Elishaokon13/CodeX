const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.querySelectorAll('.controls__color');
const lineWidth = document.querySelector('#jsRange');
const mode = document.querySelector('#jsMode');
const saveBtn = document.querySelector('#jsSave');



const INITIAL_COLOR = '#2c2c2c';
const CANVAS_SIZE = 700;

canvas.height = CANVAS_SIZE;
canvas.width = CANVAS_SIZE;


ctx.fillStyle = 'white';
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.lineWidth = 2.5;
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;

let painting = false;
let filling = false;


function stopPainting() {
    painting = false;
}


function startPainting() {
    painting = true;
}


function onMouseMove(event) {
    x = event.offsetX;
    y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}


function onMouseDown() {
    painting = true;
}


function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}


function handleLineWidth(event) {
    const currentRange = event.target.value;
    ctx.lineWidth = currentRange;
}


function handleModeClick() {
    if (filling) {
        filling = false;
        mode.innerText = "Заливка";
    } else {
        filling = true;
        mode.innerText = "Рисование";
    }
}


function handleCanvasClick() {
    if (filling) {
        ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
}


function handleCM(event) {
    event.preventDefault();
}


function handleSaveClick() {
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'PaintJS [Export]';
    link.click();
}


if (canvas) {
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', stopPainting);
    canvas.addEventListener('mouseleave', stopPainting);
    canvas.addEventListener('click', handleCanvasClick);
    canvas.addEventListener('contextmenu', handleCM);
}

if (colors) {
    colors.forEach(color => color.addEventListener('click', handleColorClick));
}
if (lineWidth) {
    lineWidth.addEventListener('change', handleLineWidth);
}
if (mode) {
    mode.addEventListener('click', handleModeClick);
}
if (saveBtn) {
    saveBtn.addEventListener('click', handleSaveClick);
}