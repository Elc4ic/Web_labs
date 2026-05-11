import {useEffect, useMemo, useRef} from "react";
import * as d3 from "d3";

const ChartDraw = ({data, oy, type}) => {
    const chartRef = useRef(null);
    const margin = {top: 20, right: 20, bottom: 60, left: 50};
    const width = 800 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const [scaleX, scaleY] = useMemo(() => {
        const x = d3.scaleBand().domain(data.map(d => d.labelX)).range([0, width]).padding(0.1);
        let y = []
        if (oy[0] === true) y = d3.scaleLinear().domain([d3.min(data, d => d.values[0]) * 0.9, d3.max(data, d => d.values[0]) * 1.1]).range([height, 0]);
        else y = d3.scaleLinear().domain([d3.min(data, d => d.values[0]) * 0.9, d3.max(data, d => d.values[0]) * 1.1]).range([height, 0]);
        return [x, y];
    }, [data, width, height]);

    useEffect(() => {
        const svg = d3.select(chartRef.current);
        svg.selectAll("*").remove();
        const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

        g.append("g").attr("transform", `translate(0,${height})`).call(d3.axisBottom(scaleX)).selectAll("text").attr("transform", "rotate(-30)").style("text-anchor", "end");
        g.append("g").call(d3.axisLeft(scaleY));

        const draw = (idx, color, offset) => {
            if (type === "Точечная диаграмма") {
                g.selectAll(`.dot-${idx}`).data(data).enter().append("circle")
                    .attr("cx", d => scaleX(d.labelX) + (offset * scaleX.bandwidth() / 2))
                    .attr("cy", d => scaleY(d.values[idx])).attr("r", 5).style("fill", color);
            } else {
                g.selectAll(`.bar-${idx}`).data(data).enter().append("rect")
                    .attr("x", d => scaleX(d.labelX) + (offset * scaleX.bandwidth() / 2))
                    .attr("y", d => scaleY(d.values[idx]))
                    .attr("width", scaleX.bandwidth() / 2)
                    .attr("height", d => height - scaleY(d.values[idx]))
                    .style("fill", color);
            }
        };

        if (oy[0]) draw(1, "red", 0);
        if (oy[1]) draw(0, "blue", 1);
    }, [data, scaleX, scaleY, oy, type]);

    return <svg ref={chartRef} width={800} height={400}/>;
};

export default ChartDraw;