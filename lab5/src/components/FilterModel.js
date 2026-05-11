import {useState} from "react";

const FilterModel = (data) => {
    const init = {name: '', type: '', country: '', city: '', year: ['', ''], height: ['', '']};
    const [filters, setFilters] = useState(init);

    const matchStr = (val, search) => String(val).toLowerCase().includes(search.toLowerCase());
    const matchRange = (val, [min, max]) => Number(val) >= (min || -Infinity) && Number(val) <= (max || Infinity);

    const filtered = data.filter(v =>
        matchStr(v['Название'], filters.name) &&
        matchStr(v['Тип'], filters.type) &&
        matchStr(v['Страна'], filters.country) &&
        matchStr(v['Город'], filters.city) &&
        matchRange(v['Год'], filters.year) &&
        matchRange(v['Высота'], filters.height)
    );

    return {
        filters,
        filteredData: filtered,
        onChange: (key, val) => setFilters(prev => ({...prev, [key]: val})),
        onClear: () => setFilters(init)
    };
};

export default FilterModel;