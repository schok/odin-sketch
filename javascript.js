function createDivs(divContainer) {
    for (x=0; x<16; x++) {
        var divRow = document.createElement("div");
            divRow.className = "row";
            divRow.innerHTML = "";
            divContainer.appendChild(divRow);
        for (i=0; i<16; i++) {
            var divColumn = document.createElement("div");
            divColumn.className = "column";
            divColumn.innerHTML = "";
            divRow.appendChild(divColumn);
        }
    }
}

divContainer = document.createElement("div");
main = document.querySelector("#main")
main.appendChild(divContainer);
createDivs(divContainer);