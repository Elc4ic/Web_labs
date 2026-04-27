const correspond = {
    "Название": "structure",
    "Тип": "category",
    "Страна": "country",
    "Город": "city",
    "Год": ["yearFrom", "yearTo"],
    "Высота": ["heightFrom", "heightTo"]
}

const getFilterCriteria = () => {
    const getValue = id => document.getElementById(id).value;
    return {
        structure: getValue("structure").toLowerCase(),
        category: getValue("category").toLowerCase(),
        country: getValue("country").toLowerCase(),
        city: getValue("city").toLowerCase(),
        yearFrom: getValue("yearFrom") ? Number(getValue("yearFrom")) : -Infinity,
        yearTo: getValue("yearTo") ? Number(getValue("yearTo")) : Infinity,
        heightFrom: getValue("heightFrom") ? Number(getValue("heightFrom")) : -Infinity,
        heightTo: getValue("heightTo") ? Number(getValue("heightTo")) : Infinity
    };
};

const filterData = (data) => {
    const criteria = getFilterCriteria();

    return data.filter(item => {
        return Object.entries(item).every(([key, val]) => {
            if (typeof val === 'string') {
                const searchStr = criteria[correspond[key]];
                return val.toLowerCase().includes(searchStr);
            } else if (typeof val === 'number') {
                const [fromKey, toKey] = correspond[key];
                return val >= criteria[fromKey] && val <= criteria[toKey];
            }
            return true;
        });
    });
};