const container = document.querySelector(".container");
const gridSize = parseInt(prompt("Choose square size"));

function grid(gridSize = 16) {
    for(let i = 0; i < gridSize; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
    for(let i = 1; i <= gridSize; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
        row.style.backgroundColor = "white";
    }
    container.appendChild(column);
    }
}

grid(gridSize);

const rows = document.querySelectorAll(".row");
rows.forEach(row => {
    row.addEventListener("click", () => {
        row.style.backgroundColor = "black";
    })
})

const btn = document.querySelector("#eraser");
btn.addEventListener("click", () => {
    rows.forEach(row => {
        row.style.backgroundColor = "white";
    });
});

const refresh = document.querySelector("#btn1");
refresh.addEventListener("click", () => {
    location.reload();
})