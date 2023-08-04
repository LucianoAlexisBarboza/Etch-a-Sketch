const container = document.querySelector(".container");
rows();
const gridColumn = document.querySelectorAll(".rows");
column();
const grid = document.querySelectorAll(".columns");

function rows() {
    for(let i = 0; i < 16; i++) {
        const content = document.createElement("div");
        container.appendChild(content);
        content.classList.add("rows");     
    }
}

function column() {
    gridColumn.forEach(function(column) {
        for(let i = 0; i < 16; i++) {
            const content = document.createElement("div");
            column.appendChild(content);
            content.classList.add("columns")
        }
    });
}

grid.forEach((columns) => {
    columns.addEventListener('click', () => {
      columns.style.background = "black";
    });
  });
