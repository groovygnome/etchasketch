let container = document.querySelector(".container");
let btn = document.querySelector(".reset");

createGrid(container, 16);

btn.addEventListener("click", () => { resetGrid(); });

function resetGrid() {
    let gridSize = Number(prompt("What size would you like your grid to be? (Enter a number > 0 & <= 100)"));
    if (gridSize > 100 || gridSize <= 0) {
        alert("Enter a number smaller than 100 or greater than 0!");
        return;
    }
    document.body.removeChild(container);
    container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
    createGrid(container, gridSize);
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
