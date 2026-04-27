document.addEventListener("DOMContentLoaded", () => {
    const dom = [
        arr.reduce((prev, cur) => prev < cur ? prev : cur, 0),
        arr.reduce((prev, cur) => prev > cur ? prev : cur, 0)
    ];
    const nums = d3.scaleLinear().domain(dom).range([0, 500])

    d3.select("#container")
        .data(arr)
        .enter()
        .append("ul")
        .append("li")
        .text(d => `${d} -> ${Math.round(nums(d))}`);

});