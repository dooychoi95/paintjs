 const canvas = document.getElementById("jsCanvas");
 const ctx = canvas.getContext("2d");
 const colors = document.getElementsByClassName("jsColor");

 canvas.width = canvas.offsetWidth;
 canvas.height = canvas.offsetHeight;

 ctx.strokeStyle = "#2c2c2c";
 ctx.lineWidth = 2.5;

 let shouldPainting = false;

 function StartPainting() {
    shouldPainting = true;
 }

 function StopPainting() {
    shouldPainting = false;
 }

 function onMouseMove(event) {
     const x = event.offsetX;
     const y = event.offsetY;
     if (!shouldPainting) {
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
 }

 if (canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", StartPainting);
    canvas.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("mouseleave", onMouseLeave);
 }

 Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
    );