let container = document.querySelector(".container");
let btn = document.querySelector(".reset");
let randColor = document.querySelector(".randomColor");
let opa = document.querySelector(".opacity");

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
        let currOpa = 0.0;
        let squareColorRand = randomColor();
        let squareColorBlack = "rgba(0, 0, 0, ";
        square.addEventListener("mouseover", () => {
            let currSquareColorRand = squareColorRand;
            let currSquareColorBlack = squareColorBlack;
            if (opa.checked) {
                currOpa += 0.1;
                currSquareColorRand += currOpa + ")";
                currSquareColorBlack += currOpa + ")";
            } else {
                currSquareColorRand += "1)";
                currSquareColorBlack += "1)";
            }
            if (randColor.checked) {
                square.style.backgroundColor = currSquareColorRand;
            } else {
                square.style.backgroundColor = currSquareColorBlack;
            }
        });
        containerElem.appendChild(square);
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    return "rgba(" + r + ", " + g + ", " + b + ", ";
}
