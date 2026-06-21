export type tTasks = {
    question: string;
    answer: string | boolean | number;
}[];

export type tQuizzes = {
    id: number;
    type: "M" | "S" | "O" | "Z";
    title: string;
    tasks: tTasks;
}[];

export const quiz: tQuizzes = [
    {
        id: 1,
        type: "M",
        title: "Сопоставьте гидроэлектростанцию и страну, в которой она расположена.",
        tasks: [
            {question: "Three Gorges Dam", answer: "Китай"},
            {question: "Itaipu Dam", answer: "Бразилия/Парагвай"},
            {question: "Belo Monte", answer: "Бразилия"},
            {question: "Guri (Simón Bolívar)", answer: "Венесуэла"}
        ]
    },
    {
        id: 2,
        type: "M",
        title: "Сопоставьте электростанцию и её мощность (в МВт).",
        tasks: [
            {question: "Three Gorges Dam", answer: 22500},
            {question: "Baihetan Dam", answer: 16000},
            {question: "Xiluodu", answer: 13860},
            {question: "Wudongde", answer: 10200}
        ]
    },
    {
        id: 3,
        type: "S",
        title: "Отсортируйте гидроэлектростанции по убыванию их мощности (от самой мощной к наименее мощной).",
        tasks: [
            {question: "Three Gorges Dam", answer: 1},
            {question: "Baihetan Dam", answer: 2},
            {question: "Itaipu Dam", answer: 3},
            {question: "Belo Monte", answer: 4},
            {question: "Guri (Simón Bolívar)", answer: 5}
        ]
    },
    {
        id: 4,
        type: "S",
        title: "Отсортируйте электростанции в хронологическом порядке их постройки (от самой старой к самой новой).",
        tasks: [
            {question: "Guri (Simón Bolívar)", answer: 1},
            {question: "Itaipu Dam", answer: 2},
            {question: "Three Gorges Dam", answer: 3},
            {question: "Belo Monte", answer: 4},
            {question: "Baihetan Dam", answer: 5}
        ]
    },
    {
        id: 5,
        type: "O",
        title: "Какая из перечисленных гидроэлектростанций находится на реке Цзиньша (Jinsha River)?",
        tasks: [
            {question: "Xiluodu", answer: true},
            {question: "Three Gorges Dam", answer: false},
            {question: "Itaipu Dam", answer: false},
            {question: "Belo Monte", answer: false}
        ]
    },
    {
        id: 6,
        type: "Z",
        title: "Выберите все гидроэлектростанции, которые расположены в Китае.",
        tasks: [
            {question: "Three Gorges Dam", answer: true},
            {question: "Baihetan Dam", answer: true},
            {question: "Wudongde", answer: true},
            {question: "Belo Monte", answer: false},
            {question: "Guri (Simón Bolívar)", answer: false}
        ]
    }
];