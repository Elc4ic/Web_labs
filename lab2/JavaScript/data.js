const books = [
    {
        title: 'Мастер и Маргарита',
        author: 'Булгаков М.А.'
    },
    {
        title: 'Белая гвардия',
        author: 'Булгаков М.А.'
    },
    {
        title: 'Война и мир',
        author: 'Толстой Л.Н.'
    },
    {
        title: 'Анна Каренина',
        author: 'Толстой Л.Н.'
    },
    {
        title: 'Игрок',
        author: 'Достоевский Ф.М.'
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const authors = new Set(books.map(book => book.author));
    const authorMap = books.reduce((acc, book) => {
        acc.set(book.author, book.title)
    }, new Map());

    d3.select("body").append("p");
    d3.select("body").append("p");
    d3.select("body").append("p");
    d3.select("body").selectAll("p").data(authors).text(d => d.author).append("select");

})