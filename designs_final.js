function makeGrid() {
    var rows = document.getElementById("inputHeight").value;
    var cols = document.getElementById("inputWidth").value;
    var grid = "";
    for (r = 1; r <= rows; r++) {
        grid += "<tr>";
        for (c = 1; c <= cols; c++) {
            grid += "<td>";
        }
    }
    document.getElementById("pixelCanvas").innerHTML = grid
}

function respondToclick(evt) {
    const pickedColor = document.getElementById("colorPicker").value
    if (evt.target.tagName !== "TD") {
        return;
    }
    evt.target.style.backgroundColor = pickedColor;
}

pixelCanvas.addEventListener("click", respondToclick)

