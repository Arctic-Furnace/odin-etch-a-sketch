console.log("Welcome to Etch-a sketch");

let gridSize = 16;

const grid = document.querySelector('#container');

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

                    square.style.backgroundColor = "black";
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