document.addEventListener("DOMContentLoaded", () => {
    let currentData = buildings;

    createTable(currentData, 'list');

    const btnFind = document.getElementById("find");
    const btnClearFilter = document.getElementById("clearFilter");
    const btnSort = document.getElementById("doSort");
    const btnClearSort = document.getElementById("clearSort");

    const formFilter = document.getElementById("filter");
    const formSort = document.getElementById("sort");

    btnFind.addEventListener("click", () => {
        formSort.reset();
        createTable(filterData(buildings), 'list');
    });

    btnClearFilter.addEventListener("click", () => {
        formFilter.reset();
        formSort.reset();
        createTable(buildings, 'list');
    });

    btnSort.addEventListener("click", () => {
        const sortedData = sortTable(currentData, createSortArr("sort"));
        createTable(sortedData, 'list');
    });

    btnClearSort.addEventListener("click", () => {
        formSort.reset();
        createTable(currentData, 'list');
    });
});



