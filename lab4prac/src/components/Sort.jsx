import {useMemo, useState} from "react";

const Sort = ({data, children}) => {
    const fields = ["Название", "Мощность", "Страна", "Локация", "Выработка", "Год", "Вид топлива"];

    const [sort, setSort] = useState([
        {field: "", desc: false}, {field: "", desc: false}, {field: "", desc: false}
    ]);
    const [sortIndex, setSortIndex] = useState(0);

    const onSortChange = (index, field, desc) => {
        const newSort = [...sort];
        newSort[index] = {field, desc};
        setSort(newSort);
    };

    const sortedData = useMemo(() => {
        return [...data].sort((a, b) => {
            for (const {field, desc} of sort) {
                if (!field) continue;
                const valA = a[field];
                const valB = b[field];

                if (valA === valB) continue;

                if (typeof valA === 'string' && typeof valB === 'string') {
                    return desc ? valB.localeCompare(valA) : valA.localeCompare(valB)
                }

                if (valA < valB) return desc ? 1 : -1;
                if (valA > valB) return desc ? -1 : 1;
            }
            return 0;
        });
    }, [sort, data])

    const inputList = (i) => {
        let list = [];
        fields.forEach(f => {
            let insert = true;
            sort.forEach(({field, desc}, index) => {
                if (field === f && index !== i) insert = false;
            })
            if (insert) list.push(<option key={f} value={f}>{f}</option>);
        })
        return list;
    }

    const sortTab = () => {
        return sort.map((config, index) => {
                if (index <= sortIndex) {
                    return (
                        <div key={index}>
                            <select
                                value={config.field}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    onSortChange(index, newValue, config.desc);
                                    if (newValue === '') setSortIndex(index);
                                    else setSortIndex(index === 2 ? 2 : index + 1);
                                    sort.forEach(({field}, i) => {
                                        if (i > index && field !== '') onSortChange(i, "", false);
                                    });
                                }}
                            >
                                <option value="">Нет</option>
                                {inputList(index)}
                            </select>
                            <label>
                                по убыванию?
                                <input
                                    type="checkbox"
                                    checked={config.desc}
                                    onChange={(e) => onSortChange(index, config.field, e.target.checked)}
                                />
                            </label>
                        </div>
                    )
                }
            }
        )
    }

    return (
        <div className="sort-controls">
            <h4>Сортировка</h4>
            {sortTab()}
            <button onClick={() => console.log("cортировка")}>Сортировать</button>
            {
                children(sortedData, sort[0].field !== '')
            }
        </div>
    )
        ;
};

export default Sort;