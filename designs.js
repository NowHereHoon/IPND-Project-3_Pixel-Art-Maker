function makeGrid() {  // creates a grid
  var pixelCanvas = document.getElementById("pixelCanvas") // get a <table> element from html
  var firstChild = pixelCanvas.firstElementChild // is <div> element in line 8
  if (firstChild) { // decides whether the makeGrid function is run first or not
    pixelCanvas.removeChild(firstChild); // clears colored-squares out once submit button is clicked
  }
  
  var grid = document.createElement("div"); //creates a <div> element
  var rows = document.getElementById("inputHeight").value; // get the value of input
  var cols = document.getElementById("inputWidth").value;  // get the value of input
    
  for (r = 1; r <= rows; r++) { //creates a table row of a grid
    var tr = document.createElement("tr"); // creates a table row
    grid.appendChild(tr) // adds a table row to <div>
      for (c = 1; c <= cols; c++) { //creates a table data of a grid
        var td = document.createElement("td"); //creates a table data
        grid.appendChild(tr).appendChild(td); // adds a table data to a table row
        td.addEventListener("click", respondToclick); //creates an event targeting each <td>, 
      }                                               //listener is a function to change the background color of <td>
   }    
  
  pixelCanvas.appendChild(grid); // add a <div> element containing <tr> and <td> to a <table>
}

function respondToclick(evt) { 
  const pickedColor = document.getElementById("colorPicker").value //get the value of an input color
  evt.target.style.backgroundColor = pickedColor; //changes the background color of the event target to the an input color
}


