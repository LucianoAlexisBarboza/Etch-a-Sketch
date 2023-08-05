const container = document.querySelector(".container");
rows();

function rows() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for(let i = 0; i < 16; i++) {
        const content = document.createElement("div");
        container.appendChild(content);
        content.classList.add("rows");     
    }
    const gridColumn = document.querySelectorAll(".rows");
    gridColumn.forEach(function(column) {
        for(let i = 0; i < 16; i++) {
            const content = document.createElement("div");
            column.appendChild(content);
            content.classList.add("columns")
        }
    });
}

const reset = document.querySelector("#eraser")
reset.addEventListener('click', rows);

const grid = document.querySelectorAll(".columns");
grid.forEach((columns) => {
    columns.addEventListener('click', () => {
      columns.style.background = "black";
    });
  });   