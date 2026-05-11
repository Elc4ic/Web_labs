import {useMemo, useState} from "react";
import stations from "../data";

const Filter = ({data, children}) => {
    const init = {name: '', type: '', country: '', city: '', output: ['', ''], year: ['', ''], power: ['', '']};
    const [filters, setFilters] = useState(init);

    const filteredData = useMemo(() => {
        let dt = [...stations];

        if (filters.name) dt = dt.filter(d => d["Название"]?.toLowerCase().includes(filters.name.toLowerCase()));
        if (filters.type) dt = dt.filter(d => d["Тип"]?.toLowerCase().includes(filters.type.toLowerCase()));
        if (filters.country) dt = dt.filter(d => d["Страна"]?.toLowerCase().includes(filters.country.toLowerCase()));
        if (filters.city) dt = dt.filter(d => d["Город"]?.toLowerCase().includes(filters.city.toLowerCase()));
        if (filters.year[0]) dt = dt.filter(d => d["Год"] >= parseInt(filters.year[0]));
        if (filters.year[1]) dt = dt.filter(d => d["Год"] <= parseInt(filters.year[1]));
        if (filters.power[0]) dt = dt.filter(d => d["Мощность"] >= parseInt(filters.power[0]));
        if (filters.power[1]) dt = dt.filter(d => d["Мощность"] <= parseInt(filters.power[1]));
        if (filters.output[0]) dt = dt.filter(d => d["Выработка"] >= parseInt(filters.output[0]));
        if (filters.output[1]) dt = dt.filter(d => d["Выработка"] <= parseInt(filters.output[1]));

        return dt;
    }, [filters, data]);

    const input = (label, key) => (
        <div>{label}: <input value={filters[key]}
                             onChange={e => setFilters(prev => ({...prev, [key]: e.target.value}))}/></div>
    );

    const range = (label, key) => (
        <div>
            {label}: от <input type="number" value={filters[key][0]} onChange={e => {
            const n = [...filters[key]];
            n[0] = e.target.value;
            setFilters(prev => ({...prev, [key]: n}));
        }}/>
            до <input type="number" value={filters[key][1]} onChange={e => {
            const n = [...filters[key]];
            n[1] = e.target.value;
            setFilters(prev => ({...prev, [key]: n}));
        }}/>
        </div>
    );

    return (
        <div>
            <form className="filter-form">
                <h4>Фильтр</h4>
                {input("Название", "name")}
                {input("Тип", "type")}
                {input("Страна", "country")}
                {input("Город", "city")}
                {range("Мощность (МВт)", "power")}
                {range("Выработка (ТВтч/год)", "output")}
                {range("Год ввода", "year")}
                <button type="submit" onClick={e => e.preventDefault()}>Найти</button>
                <button type="button" onClick={e => setFilters(init)}>Очистить</button>
            </form>
            {children(filteredData)}
        </div>
    );
};

export default Filter;