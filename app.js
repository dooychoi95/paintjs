 const canvas = document.getElementById("jsCanvas");
 const ctx = canvas.getContext("2d");
 const colors = document.getElementsByClassName("jsColor");
 const range = document.getElementById("jsRange");
 const mode = document.getElementById("jsMode");

 const INITIAL_COLOR = "#2c2c2c";

 canvas.width = canvas.offsetWidth;
 canvas.height = canvas.offsetHeight;

 ctx.fillStyle = "white";
 ctx.fillRect(0, 0, canvas.width, canvas.height);

 ctx.strokeStyle = INITIAL_COLOR;
 ctx.fillStyle = INITIAL_COLOR;
 ctx.lineWidth = 2.5;

 let painting = false;
 let filling = false;

 function StartPainting() {
   painting = true;
 }

 function StopPainting() {
   painting = false;
 }

 function onMouseMove(event) {
     const x = event.offsetX;
     const y = event.offsetY;
     if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x,y);
     } else {
        ctx.lineTo(x,y);
        ctx.stroke();
     }
 }

 function onMouseUp(event) {
    StopPainting();
 }

 function onMouseLeave(event) {
    StopPainting();
 }

 function handleColorClick(event) {
    ctx.strokeStyle = event.target.style.backgroundColor;
    ctx.fillStyle = event.target.style.backgroundColor;
 }

 function handleRangeChange(event) {
   ctx.lineWidth = event.target.value;
 }

 function handleModeClick(event) {
   if (filling){
      filling = false;
      mode.innerText = "Fill"
   } else {
      filling = true;
      mode.innerText = "Paint"
   }
 }

 function handleCanvasClick() {
    if (filling) {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
 }

 if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", StartPainting);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("click", handleCanvasClick);
 }

 Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
    );

 if (range) {
    range.addEventListener("input", handleRangeChange);
 }

 if (mode) {
    mode.addEventListener("click", handleModeClick);
 }
 