document.addEventListener("DOMContentLoaded", () => {
    let currentData = stations;

    createTable(currentData, 'list');

    const btnFind = document.getElementById("find");
    const btnClearFilter = document.getElementById("clearFilter");
    const btnSort = document.getElementById("doSort");
    const btnClearSort = document.getElementById("clearSort");

    const formFilter = document.getElementById("filter");
    const formSort = document.getElementById("sort");
    const sort1 = document.getElementById("sort1");
    const sort2 = document.getElementById("sort2");

    function updateVisibility() {
        if (sort1.selectedIndex === 0) {
            sort2.classList.add("hidden");
            formSort.reset();
        } else {
            sort2.classList.remove("hidden");
        }
    }

    formSort.addEventListener("change", updateVisibility);

    const create = () => {
        createTable(sortTable(filterData(stations), createSortArr("sort")), 'list');
    }

    btnFind.addEventListener("click", () => {
        formSort.reset();
        create()
    });

    btnClearFilter.addEventListener("click", () => {
        formFilter.reset();
        formSort.reset();
       create()
    });

    btnSort.addEventListener("click", () => {
        create()
    });

    btnClearSort.addEventListener("click", () => {
        formSort.reset();
        create()
    });
});



