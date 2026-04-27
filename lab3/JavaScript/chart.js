
const createArrGraph = (data, keyX) => {
    const grouped = d3.rollup(data,
        v => d3.extent(v, d => d["Высота"]),
        d => d[keyX]
    );

    let arrGraph = Array.from(grouped, ([labelX, values]) => ({ labelX, values }));

    if (keyX === "Год") {
        arrGraph.sort((a, b) => a.labelX - b.labelX);
    } else {
        arrGraph.sort((a, b) => b.values[1] - a.values[1]);
    }

    return arrGraph;
};

const createAxis = (svg, data, attr_area, showMax, showMin) => {
    const allValues = data.flatMap(d => d.values);

    let visibleValues = [];
    if (showMax && showMin) {
        visibleValues = allValues;
    } else if (showMax) {
        visibleValues = allValues.filter((v, i) => i % 2 === 1);
    } else if (showMin) {
        visibleValues = allValues.filter((v, i) => i % 2 === 0);
    }

    const [min, max] = d3.extent(visibleValues);

    const scaleX = d3.scaleBand()
        .domain(data.map(d => d.labelX))
        .range([0, attr_area.width - 2 * attr_area.marginX])
        .padding(0.2);

    const scaleY = d3.scaleLinear()
        .domain([min * 0.8, max * 1.1])
        .range([attr_area.height - 2 * attr_area.marginY, 0]);

    const axisX = d3.axisBottom(scaleX);
    const axisY = d3.axisLeft(scaleY);

    svg.append("g")
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.height - attr_area.marginY})`)
        .call(axisX)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-45)");

    svg.append("g")
        .attr("transform", `translate(${attr_area.marginX}, ${attr_area.marginY})`)
        .call(axisY);

    return[scaleX, scaleY];
};

const drawScatter = (svg, data, scaleX, scaleY, attr_area, showMax, showMin) => {
    const drawDots = (dataIndex, color) => {
        svg.append("g")
            .selectAll("circle")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", d => scaleX(d.labelX) + scaleX.bandwidth() / 2 + attr_area.marginX)
            .attr("cy", d => scaleY(d.values[dataIndex]) + attr_area.marginY)
            .attr("r", 4)
            .style("fill", color);
    };

    if (showMax) drawDots(1, "red");
    if (showMin) drawDots(0, "blue");
};

const drawBar = (svg, data, scaleX, scaleY, attr_area, showMax, showMin) => {
    const bandWidth = scaleX.bandwidth();
    const barWidth = (showMax && showMin) ? bandWidth / 2 : bandWidth;

    const drawRects = (dataIndex, color, offsetMultiplier) => {
        svg.append("g")
            .selectAll("rect")
            .data(data)
            .enter()
            .append("rect")
            .attr("x", d => scaleX(d.labelX) + attr_area.marginX + (barWidth * offsetMultiplier))
            .attr("y", d => scaleY(d.values[dataIndex]) + attr_area.marginY)
            .attr("width", barWidth)
            .attr("height", d => (attr_area.height - 2 * attr_area.marginY) - scaleY(d.values[dataIndex]))
            .style("fill", color);
    };

    if (showMax) drawRects(1, "red", 0);
    if (showMin) drawRects(0, "blue", showMax ? 1 : 0);
};

const drawGraph = (data) => {
    const keyX = d3.select('input[name="xAxis"]:checked').node().value;
    const showMax = d3.select("#yMax").node().checked;
    const showMin = d3.select("#yMin").node().checked;
    const chartType = d3.select("#chartType").node().value;

    const svg = d3.select("svg");
    d3.select("svg").classed("hidden", false);
    svg.selectAll("*").remove();

    const yMaxLabel = d3.select("#yMax").node().closest('label');
    const yMinLabel = d3.select("#yMin").node().closest('label');

    d3.select(yMaxLabel).style("background", "");
    d3.select(yMinLabel).style("background", "");
    d3.select('.graph-settings').style("border", "");

    if (!showMax && !showMin) {
        d3.select("svg").classed("hidden", true);
        d3.select(yMaxLabel).style("background", "#cd7070");
        d3.select(yMinLabel).style("background", "#cd7070");
        d3.select('.graph-settings').style("border", "2px solid red");
        return;
    }

    const attr_area = {
        width: parseFloat(svg.style("width")),
        height: parseFloat(svg.style("height")),
        marginX: 30,
        marginY: 30
    };

    d3.select(yMaxLabel).style("background", "");
    d3.select(yMinLabel).style("background", "");
    d3.select('.graph-settings').style("border", "");

    const arrGraph = createArrGraph(data, keyX);

    const [scaleX, scaleY] = createAxis(svg, arrGraph, attr_area, showMax, showMin);

    if (chartType === "scatter") {
        drawScatter(svg, arrGraph, scaleX, scaleY, attr_area, showMax, showMin);
    } else if (chartType === "bar") {
        drawBar(svg, arrGraph, scaleX, scaleY, attr_area, showMax, showMin);
    }
};