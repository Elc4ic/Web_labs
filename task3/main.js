document.addEventListener("DOMContentLoaded", () => {
    const n = 600
    const svg = d3.select("svg")
        .attr("width", n)
        .attr("height", n);

    function drawBall(svg) {
        let ball = svg.append("g")
            .style("stroke", "black")
            .style("stroke-width", 2)
            .style("stroke-linejoin", "round");

        ball.append("ellipse")
            .attr("cx", 0)
            .attr("cy", 0)
            .attr("rx", 10)
            .attr("ry", 10)
            .style("fill", "#329de1")

        return ball
    }

    const runAnimation = () => {
        const startX = Math.floor(Math.random() * n)
        const startY = Math.floor(Math.random() * n)
        let pict = drawBall(svg, startX, startY);

        const endX = (startX < n / 2) ? 10 : n - 10;
        const endY = (startY < n / 2) ? 10 : n - 10;

        pict.attr("transform", `translate(${startX}, ${startY})`);

        pict.transition()
            .duration(6000)
            .ease(d3.easeLinear)
            .attrTween('transform', function () {
                return function (t) {
                    const currentX = startX + (endX - startX) * t;
                    const currentY = startY + (endY - startY) * t;

                    return `translate(${currentX}, ${currentY})`;
                };
            });

    };

    const balls = 40
    d3.range(0, balls).forEach(runAnimation)

});