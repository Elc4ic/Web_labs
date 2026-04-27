function createPathG() {
    const svg = d3.select("svg");
    const H = svg.attr("width");
    const W = svg.attr("height");
    const P = 100;
    const s = 5;

    return [
        ...d3.range(H - P, P, -s).map(y => ({x: P, y})),
        ...d3.range(P, W - P, s).map(x => ({x, y: P})),
    ];
}

function createPathCircle() {
    const svg = d3.select("svg");
    const W = svg.attr("width");
    const H = svg.attr("height");

    return [...d3.range(0, Math.PI * 2).map(t => ({
        x: W / 2 + W / 3 * Math.sin(t),
        y: H / 2 + H / 3 * Math.cos(t)
    }))];
}

function createPathSnake() {
    const svg = d3.select("svg");
    const W = svg.attr("width");
    const H = svg.attr("height");
    const P = 100;
    const s = 5;

    return [
        ...d3.range(H - P, P, -s).map(y => ({x: P, y})),
        ...d3.range(P, W / 2, s).map(x => ({x, y: P})),
        ...d3.range(P, H - P, s).map(y => ({x: W / 2, y})),
        ...d3.range(W / 2, W - P, s).map(x => ({x, y: H - P})),
        ...d3.range(H - P, P, -s).map(y => ({x: W - P, y}))
    ];
}

const drawPath = (typePath) => {
    const svg = d3.select("svg");
    const dataPoints = (typePath == 0)
        ? createPathG()
        : (typePath == 1)
            ? createPathCircle()
            : createPathSnake();
    const line = d3.line()
        .x((d) => d.x)
        .y((d) => d.y);

    const path = svg.append('path')
        .attr('d', line(dataPoints))
        .attr('stroke', 'black')
        .attr('fill', 'none');

    return path;
}