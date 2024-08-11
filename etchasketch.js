console.log("Welcome to Etch-a sketch");

const grid = document.querySelector('#container');



for(let i = 0; i < 16; i++ )
{
    const row = document.createElement("div");
    row.classList.add("row");
    for(let i = 0; i < 16; i++ )
    {
        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);
        console.log("Adding square " + i);
    }
    grid.appendChild(row);
}

