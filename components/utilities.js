export const drawRect = (detections, ctx) =>{
  // Loop through each prediction
  detections.forEach(prediction => {

    // Extract boxes and classes
    const [x, y, width, height] = prediction['bbox'];
    var text = prediction['class'];
    text=text.toUpperCase()
    // Set styling
    const color = "red";
    const value=5;
    ctx.strokeStyle = '#' + color
    ctx.font = '25px Arial';
    ctx.lineWidth = value;

    // Draw rectangles and text
    ctx.beginPath();
    ctx.fillStyle = '#' + color
    ctx.fillText(text, x, y);
    ctx.rect(x, y, width, height);
    ctx.stroke();
  });
}
