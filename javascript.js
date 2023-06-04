function createDivs(divContainer, size) {
    for (x = 0; x < size; x++) {
        var divRow = document.createElement("div");
        divRow.className = "row";
        divRow.innerHTML = "";
        divContainer.appendChild(divRow);
        for (i = 0; i < size; i++) {
            var divColumn = document.createElement("div");
            divColumn.className = "column";
            divColumn.innerHTML = "";
            divRow.appendChild(divColumn);
        }
    }
}
function resetGrid() {
    const gridColumn = document.querySelectorAll(".column");
    gridColumn.forEach((div) => {
        div.remove();
    });

    const gridRow = document.querySelectorAll(".row");
    gridRow.forEach((div) => {
        div.remove();
    })
}
function hover() {
    const grid = document.querySelectorAll(".column");
    console.log(grid);
    grid.forEach((div) => {
        div.addEventListener("mouseover", (event) => {
            div.style.backgroundColor = "gray";
        });
    });
}
function adjustGrid(size) {
    if (size == null) {
        return;
    }
    else if (typeof(size) == "string") {
        alert("Oops! The grid size must be numerical.")
    }
    else if (size > 100 || size < 1) {
        alert("Oops! The grid size must be between 1 and 100.");
        return;
    }
    else {
        resetGrid();
        createDivs(divContainer, size);
        hover();
    }
}
divContainer = document.createElement("div");
divContainer.id = "grid"
main = document.querySelector("#main");
var button = document.createElement("button");
button.innerHTML = "Change grid size";
main.appendChild(divContainer);
divContainer.append(button);
createDivs(divContainer, 16);
button.onclick = function () {
    size = window.prompt("What grid size do you want?", "");
    adjustGrid(size);
}
hover();