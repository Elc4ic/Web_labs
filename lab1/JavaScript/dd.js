function returnMaxStr(...ss) {
    return ss.reduce((acc, str) => {
        const s = str.split(" ").reduce((a, b) => a.length > b.length ? a : b, "")
        return acc.includes(s) ? acc : acc + s
    }, "");
}

console.log(returnMaxStr("yyy gggg dfghj eee", " rrr  fffff eeee qqq", "333 55555 1 22 red"))