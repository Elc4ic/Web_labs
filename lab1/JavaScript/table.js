
const clearTable = (idTable) => {
    document.getElementById(idTable).innerHTML = "";
};

const createTable = (data, idTable) => {
    const table = document.getElementById(idTable);

    clearTable(idTable)

    table.append(createHeaderRow(Object.keys(data[0])));
    table.append(createBodyRows(data));
};

function element(tag, content) {
    const parent = document.createElement(tag);
    if (arguments.length === 1) {
        return (...children) => {
            parent.append(...children);
            return parent
        }
    } else {
        parent.innerHTML = content;
        return parent
    }
}

const createHeaderRow = (headers) =>
    element('tr')(...headers.map(header => element('th', header)))

const createBodyRows = (data) =>
    element("tbody")(
        ...data.map(building => element('tr')(
                ...Object.values(building).map(field =>
                    element('td', field)
                )
            )
        )
    )

//1
const arr = [1, 2, 3, 4, 5]
const rr = arr.map(it => {
    if (it === 3 || it === 4) return (it - 2) * 100
    else return it
})
console.log(rr)

//2
const arr2 = [2, 2, 4, 1, 6, 12]
const rr2 = arr2.map((it, index) => {

})
console.log(rr2)

//3
console.log(arr2.reduce((accum, item) => {
    return accum > item ? accum : accum
}))

//4
const add = (a, b) => a + b;
const mul = (a, b) => a * b;

const groupArr = (fun, ...numbers) => numbers.reduce(fun)

console.log(groupArr(add, [1, 3, 4, 5]))



