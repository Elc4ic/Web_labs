

document.addEventListener("DOMContentLoaded", () => {
    showTable("building", stations);

    drawGraph(stations);

    const btnToggleTable = document.getElementById("btn-toggle-table");
    const tableEl = document.getElementById("building");

    btnToggleTable.addEventListener("click", () => {
        const isHidden = tableEl.classList.toggle("hidden");
        btnToggleTable.textContent = isHidden ? "Показать таблицу" : "Скрыть таблицу";
    });

    const Max = document.getElementById("yMax");
    const Min = document.getElementById("yMin");

    Max.addEventListener("click", () => {
        drawGraph(stations);
    });

    Min.addEventListener("click", () => {
        drawGraph(stations);
    });

    // d3.select("#yMax").on("change", drawGraph(buildings));
    // d3.select("#yMin").on("change", drawGraph(buildings));
});