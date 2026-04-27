const showTable = (idTable, data) => {
    const table = d3.select(`#${idTable}`);

    table.selectAll("*").remove();

    if (data.length === 0) return;

    table.append("thead")
        .append("tr")
        .selectAll("th")
        .data(Object.keys(data[0]))
        .enter()
        .append("th")
        .text(d => d);

    const rows = table.append("tbody")
        .selectAll("tr")
        .data(data)
        .enter()
        .append("tr");

    rows.selectAll("td")
        .data(d => Object.values(d))
        .enter()
        .append("td")
        .text(d => d);
};