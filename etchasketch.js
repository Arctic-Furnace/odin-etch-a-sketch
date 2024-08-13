console.log("Welcome to Etch-a sketch");

let gridSize = 16;

let paintColor = "black"

const grid = document.querySelector('#container');
const buttonRainbow = document.getElementById("buttonRainbow");
const buttonBlack = document.getElementById("buttonBlack");
const buttonBlue = document.getElementById("buttonBlue");

buttonBlack.style.backgroundColor = "LightGreen";

function newGrid(gridSize){
    for(let i = 0; i < gridSize; i++ )
        {
            const row = document.createElement("div");
            row.classList.add("row");
            for(let i = 0; i < gridSize; i++ )
            {
                const square = document.createElement("div");
                square.classList.add("square");
                square.addEventListener('mouseover', () => {
                    if(paintColor == "rainbow"){
                        square.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16) ;
                    }
                    else{
                        square.style.backgroundColor =  paintColor;
                    }
                    
                })
                row.appendChild(square);
                console.log("Adding square " + i);
            }
            grid.appendChild(row);
        }
}


newGrid(gridSize);

const buttonNewSketch = document.getElementById("buttonNewSketch");

buttonNewSketch.addEventListener('click', () => {

    gridSize = window.prompt("What size grid would you like? Max 100");
    if(gridSize > 99)
    {
        gridSize = 100;
    }
    
    while (grid.lastElementChild){
        grid.removeChild(grid.lastElementChild);
    }
    newGrid(gridSize);
})



buttonBlue.addEventListener('click', () => {
    buttonBlue.style.backgroundColor = "LightGreen";
    buttonBlack.style.backgroundColor = "";
    buttonRainbow.style.backgroundColor = "";
    paintColor = "blue";
})



buttonBlack.addEventListener('click', () => {
    buttonBlue.style.backgroundColor = "";
    buttonBlack.style.backgroundColor = "LightGreen";
    buttonRainbow.style.backgroundColor = "";
    paintColor = "black";
})



buttonRainbow.addEventListener('click', () => {
    buttonBlue.style.backgroundColor = "";
    buttonBlack.style.backgroundColor = "";
    buttonRainbow.style.backgroundColor = "LightGreen";
    paintColor = "rainbow";
})

