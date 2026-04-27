

document.addEventListener("DOMContentLoaded", () => {
    showTable("build", buildings);

    drawGraph(buildings);

    const btnToggleTable = document.getElementById("btn-toggle-table");
    const tableEl = document.getElementById("build");

    btnToggleTable.addEventListener("click", () => {
        const isHidden = tableEl.classList.toggle("hidden");
        btnToggleTable.textContent = isHidden ? "Показать таблицу" : "Скрыть таблицу";
    });

    const Max = document.getElementById("yMax");
    const Min = document.getElementById("yMin");

    Max.addEventListener("click", () => {
        drawGraph(buildings);
    });

    Min.addEventListener("click", () => {
        drawGraph(buildings);
    });

    // d3.select("#yMax").on("change", drawGraph(buildings));
    // d3.select("#yMin").on("change", drawGraph(buildings));
});