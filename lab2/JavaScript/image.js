function drawPlane(svg) {
    let plane = svg.append("g")
        .style("stroke", "black")
        .style("stroke-width", 2)
        .style("stroke-linejoin", "round");

    plane.append("ellipse")
        .attr("cx", 0)
        .attr("cy", 0)
        .attr("rx", 80)
        .attr("ry", 20)
        .style("fill", "#d4e6f1")
        .style("stroke", "#2c3e50");

    plane.append("rect")
        .attr("x", -5)
        .attr("y", 15)
        .attr("width", 30)
        .attr("height", 90)
        .attr("rx", 5)
        .style("fill", "#5d6d7e")
        .style("stroke", "#344b65");

    plane.append("rect")
        .attr("x", -5)
        .attr("y", -105)
        .attr("width", 30)
        .attr("height",90 )
        .attr("rx", 5)
        .style("fill", "#5d6d7e")
        .style("stroke", "#2c3e50");

    plane.append("rect")
        .attr("x", -75)
        .attr("y", -40)
        .attr("width", 20)
        .attr("height",30 )
        .attr("rx", 5)
        .style("fill", "#5d6d7e")
        .style("stroke", "#2c3e50");

    plane.append("rect")
        .attr("x", -75)
        .attr("y", 10)
        .attr("width", 20)
        .attr("height",30)
        .attr("rx", 5)
        .style("fill", "#5d6d7e")
        .style("stroke", "#2c3e50");

    plane.append("ellipse")
        .attr("cx", 34)
        .attr("cy", 0)
        .attr("rx", 20)
        .attr("ry", 14)
        .style("fill", "#009fff")
        .style("stroke", "#2c3e50");

    plane.append("ellipse")
        .attr("cx", 80)
        .attr("cy", 0)
        .attr("rx", 5)
        .attr("ry", 20)
        .style("fill", "#a0522d")
        .style("stroke", "#5c2e0b");

    return plane
}