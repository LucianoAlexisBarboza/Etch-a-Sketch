const container = document.querySelector(".container");

function grid(size) {
    for(let i = 0; i < size; i++) {
        let column = document.createElement("div");
        column.classList.add("column");
    for(let i = 1; i <= size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        column.appendChild(row);
    }
    container.appendChild(column);
    }
}

grid(16);

const rows = document.querySelectorAll(".row");
rows.forEach(row => {
    row.addEventListener("click", () => {
        row.style.backgroundColor = "blue";
    })
})

const btn = document.querySelector("#eraser");
btn.addEventListener("click", () => {
    rows.forEach(row => {
        row.style.backgroundColor = "white";
    });
});
