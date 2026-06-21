//Задание 1
//И да и нет

//Задание 2
const arr = [1, 2, 3, 4, 5];

const replaced = arr.map((v, i) => i === 3 ? 100 : v);
const deleted = replaced.filter((_, i) => i !== 2);
const result = [...deleted.slice(0, -1), 200, deleted.at(-1)];

//Задание 3
const getAverages = arr => arr.map((_, i, a) => {
    const items = a.slice(Math.max(0, i - 1), i + 2);
    return +(items.reduce((s, v) => s + v, 0) / items.length).toFixed(2);
});

//Задание 4
const unique = [...new Set(arr)];

//Задание 5
const min = arr.reduce((m, v) => Math.min(m, v));

//Задание 6
const groupArr = (fn, ...nums) => nums.reduce(fn);

//Задание 7
const search = (users, newUser) =>
    users.includes(newUser) ? [...users] : [...users, newUser];

//Задание 8
const calculatePrice = (price, discount = 0, coupon = 0, serviceFee = 10, tax = 30) =>
    (price - price * (discount / 100) - coupon + serviceFee) * (1 + tax / 100);

//Задание 9
const curriedTax = fixPrice => discount => price => {
    const newPrice = Math.max(0, price - fixPrice);
    return (newPrice * discount) / 100;
};

//Задание 10
const fact = n => n > 1 ? n * fact(n - 1) : 1;
const calculate = (n, fn) => Array.from({ length: n }, (_, i) => fn(i + 1)).reduce((a, b) => a + b, 0);

const res1 = calculate(n, fact);
const res2 = calculate(n, i => i ** i);
const res3 = calculate(n, i => 1 / fact(i));

//Задание 11
const createHeaderRow = headers => {
    const tr = document.createElement('tr');
    tr.append(...headers.map(h => Object.assign(document.createElement('th'), { innerHTML: h })));
    return tr;
};
