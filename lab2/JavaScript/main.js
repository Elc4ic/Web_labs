document.addEventListener("DOMContentLoaded", function() {
    const svg = d3.select("svg")
        .attr("width", 600)
        .attr("height", 600);

    const form = {
        get cx() { return  d3.select("#setting").select("#cx").property("value"); },
        get cy() { return d3.select("#setting").select("#cy").property("value"); },
        get scaleX() { return d3.select("#setting").select("#scaleX").property("value"); },
        get scaleY() { return d3.select("#setting").select("#scaleY").property("value"); },
        get angle() { return d3.select("#setting").select("#angle").property("value"); },
        get scaleX_f() { return d3.select("#setting").select("#scaleX_f").property("value"); },
        get scaleY_f() { return d3.select("#setting").select("#scaleY_f").property("value"); },
        get angle_f() { return d3.select("#setting").select("#angle_f").property("value"); },
        get cx_finish() { return d3.select("#setting").select("#cx_finish").property("value"); },
        get cy_finish() { return d3.select("#setting").select("#cy_finish").property("value"); }
    };

    const cbAnimate = document.getElementById("cb-animate");
    const cbPath = document.getElementById("cb-path");
    const labelPath = document.getElementById("label-path");
    const blockFinish = document.getElementById("block-finish");
    const blockF = document.getElementById("block-f");
    const blockPath = document.getElementById("block-path");
    const blockAnimSettings = document.getElementById("block-anim-settings");
    const btnDraw = document.getElementById("btn-draw");
    const btnAnim = document.getElementById("btn-anim");
    const btnClear = document.getElementById("btn-clear");
    const scaleRotFields = document.querySelectorAll(".anim-scale-rot");
    const scaleRotFieldsF = document.querySelectorAll(".anim-scale-rotf");

    function updateVisibility() {
        const isAnimate = cbAnimate.checked;
        const isPath = cbPath.checked;

        if (!isAnimate) {
            d3.select(labelPath).classed("hidden", true);
            d3.select(blockFinish).classed("hidden", true);
            d3.select(blockF).classed("hidden", true);
            d3.select(blockPath).classed("hidden", true);
            d3.select(blockAnimSettings).classed("hidden", true);
            d3.select(btnDraw).classed("hidden", false);
            d3.select(btnAnim).classed("hidden", true);

            cbPath.checked = false;
        } else {
            d3.select(labelPath).classed("hidden", false);
            d3.select(blockAnimSettings).classed("hidden", false);
            d3.select(btnDraw).classed("hidden", true);
            d3.select(btnAnim).classed("hidden", false);

            if (isPath) {
                d3.select(blockPath).classed("hidden", false);
                d3.select(blockF).classed("hidden", false);
                d3.select(blockFinish).classed("hidden", true);
                d3.selectAll(scaleRotFields).classed("hidden", true);
                d3.selectAll(scaleRotFieldsF).classed("hidden", false);
            } else {
                d3.select(blockPath).classed("hidden", true);
                d3.select(blockF).classed("hidden", true);
                d3.select(blockFinish).classed("hidden", false);
                d3.selectAll(scaleRotFields).classed("hidden", false);
                d3.selectAll(scaleRotFieldsF).classed("hidden", true);
            }
        }
    }

    d3.select(cbAnimate).on("change", updateVisibility);
    d3.select(cbPath).on("change", updateVisibility);

    updateVisibility();

    const draw = () => {
        let pict = drawPlane(svg);
        pict.attr("transform",
            `translate(${form.cx}, ${form.cy}) 
             scale(${form.scaleX}, ${form.scaleY}) 
             rotate(${form.angle})`
        );
    };

    const runAnimation = () => {
        let pict = drawPlane(svg);

        const easeTypes = {
            "linear": d3.easeLinear,
            "elastic": d3.easeElastic,
            "bounce": d3.easeBounce
        };
        const selectedEase = easeTypes[form["ease-type"]];

        const startX = parseFloat(form.cx);
        const startY = parseFloat(form.cy);
        const startScaleX = parseFloat(form.scaleX);
        const startScaleY = parseFloat(form.scaleY);
        const startRotate = parseFloat(form.angle);

        const endScaleX = parseFloat(form.scaleX_f);
        const endScaleY = parseFloat(form.scaleY_f);
        const endRotate = parseFloat(form.angle_f);

        pict.attr("transform",
            `translate(${startX}, ${startY}) 
         scale(${startScaleX}, ${startScaleY}) 
         rotate(${startRotate})`
        );

        if (!cbPath.checked) {
            const endX = parseFloat(form.cx_finish);
            const endY = parseFloat(form.cy_finish);

            pict.transition()
                .duration(6000)
                .ease(selectedEase)
                .attrTween('transform', function() {
                    return function(t) {
                        const currentX = startX + (endX - startX) * t;
                        const currentY = startY + (endY - startY) * t;
                        const currentScaleX = startScaleX + (endScaleX - startScaleX) * t;
                        const currentScaleY = startScaleY + (endScaleY - startScaleY) * t;
                        const currentRotate = startRotate + (endRotate - startRotate) * t;

                        return `translate(${currentX}, ${currentY}) 
                            scale(${currentScaleX}, ${currentScaleY}) 
                            rotate(${currentRotate})`;
                    };
                });
        } else {
            let pathType = form["path-type"];
            let path = drawPath(pathType);
            const pathNode = path.node();
            const pathLength = pathNode.getTotalLength();

            pict.transition()
                .duration(6000)
                .ease(selectedEase)
                .attrTween('transform', function() {
                    return function(t) {
                        const point = pathNode.getPointAtLength(t * pathLength);
                        const currentScaleX = startScaleX + (endScaleX - startScaleX) * t;
                        const currentScaleY = startScaleY + (endScaleY - startScaleY) * t;
                        const currentRotate = startRotate + (endRotate - startRotate) * t;

                        return `translate(${point.x}, ${point.y}) 
                            scale(${currentScaleX}, ${currentScaleY}) 
                            rotate(${currentRotate})`;
                    };
                });
        }
    };

    d3.select(btnDraw).on("click", draw);
    d3.select(btnAnim).on("click", runAnimation);
    d3.select(btnClear).on("click", () => {
        svg.selectAll('*').remove();
    });
});