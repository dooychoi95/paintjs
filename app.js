 const canvas = document.getElementById("jsCanvas");
 const ctx = canvas.getContext("2d");
 const colors = document.getElementsByClassName("jsColor");
 const range = document.getElementById("jsRange");
 const mode = document.getElementById("jsMode");
 const saveBtn = document.getElementById("jsSave");

 const INITIAL_COLOR = "#2c2c2c";

 canvas.width = canvas.offsetWidth;
 canvas.height = canvas.offsetHeight;

 ctx.fillStyle = "white";
 ctx.fillRect(0, 0, canvas.width, canvas.height);

 ctx.strokeStyle = INITIAL_COLOR;
 ctx.fillStyle = INITIAL_COLOR;
 ctx.lineWidth = 2.5;

 let painting = false;
 let filling = true;

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
   if (!filling){
      filling = true;
      mode.innerText = "Fill"
   } else {
      filling = false;
      mode.innerText = "Paint"
   }
 }

 function handleCanvasClick() {
    if (filling) {
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
 }

 function handleCM(event) {
   event.preventDefault();
 }

 function handleSaveClick() {
   const image = canvas.toDataURL();
   const link = document.createElement("a");
   link.href = image;
   link.download = "Paintjs Fin!!";
   link.click();
 }

 if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", StartPainting);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
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
 
 if (saveBtn) {
   saveBtn.addEventListener("click", handleSaveClick);
 }