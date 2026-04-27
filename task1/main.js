
document.addEventListener("DOMContentLoaded", () => {
    const groupedBooks = d3.group(books, d => d.author);

    const container = d3.select("#container");

    const paragraphs = container.selectAll("p")
        .data(groupedBooks)
        .enter()
        .append("p");

    paragraphs.append("span")
        .text(d => `${d[0]} Выберите книгу: `);

    const selects = paragraphs.append("select");

    selects.append("option")
        .text("Не выбрана")
        .attr("value", "");

    selects.selectAll("option.book-item")
        .data(d => d[1])
        .enter()
        .append("option")
        .attr("class", "book-item")
        .attr("value", d => d.title)
        .text(d => d.title);

});