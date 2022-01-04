function makeGrid() {
  var pixelCanvas = document.getElementById("pixelCanvas")
  var firstChild = pixelCanvas.firstElementChild
  if (firstChild) {
    pixelCanvas.removeChild(firstChild);
  }
  
  var grid = document.createElement("div");
  var rows = document.getElementById("inputHeight").value;
  var cols = document.getElementById("inputWidth").value;
    
  for (r = 1; r <= rows; r++) {
    var tr = document.createElement("tr");
    grid.appendChild(tr)
      for (c = 1; c <= cols; c++) {
        var td = document.createElement("td");
        grid.appendChild(tr).appendChild(td);
        td.addEventListener("click", respondToclick);
      }
  }
  pixelCanvas.appendChild(grid);
}

function respondToclick(evt) {
  const pickedColor = document.getElementById("colorPicker").value
  evt.target.style.backgroundColor = pickedColor;
}


