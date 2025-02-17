let container = document.querySelector(".container");
let btn = document.querySelector(".reset");

createGrid(container, 16);


function resetGrid() {
    let gridSize = Number(prompt("What size would you like your grid to be? (Enter a number <= 100)"));
    document.body.removeChild(container);
    let newContainer = document.createElement("div");
    newContainer.classList.add("container");
    createGrid(newContainer, gridSize);
}

function createGrid(containerElem, gridSize) {
    boxSize = (Math.floor(960 / gridSize) - 2) + "px";
    gridSize = gridSize * gridSize;
    for (let i = 0; i < gridSize; i++) {
        let square = document.createElement("div");
        square.style.border = "1px solid black";
        square.style.width = boxSize;
        square.style.height = boxSize;
        square.addEventListener("mouseover", () => { square.style.backgroundColor = "black"; });
        containerElem.appendChild(square);
    }
}
