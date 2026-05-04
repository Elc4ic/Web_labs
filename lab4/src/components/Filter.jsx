const Filter = ({ filters, onChange, onClear }) => {

    const input = (label, key) => (
        <label>{label}:
            <input value={filters[key]} onChange={e => onChange(key, e.target.value)} />
        </label>
    );

    const range = (label, key, idx) => {
        const handleChange = (e) => {
            const newRange = [...filters[key]];
            newRange[idx] = e.target.value;
            onChange(key, newRange);
        };
        return <label>{label}: <input type="number" value={filters[key][idx]} onChange={handleChange} /></label>;
    };

    return (
        <form className="filter-form" onSubmit={e => e.preventDefault()}>
            <h4>Фильтры</h4>
            {input("Название", "name")}
            {input("Тип", "type")}
            {input("Страна", "country")}
            {input("Город", "city")}

            {range("Год от", "year", 0)}   {range("Год до", "year", 1)}
            {range("Высота от", "height", 0)} {range("Высота до", "height", 1)}

            <div className="filter-buttons">
                <button type="submit">Фильтровать</button>
                <button type="button" onClick={onClear}>Очистить фильтр</button>
            </div>
        </form>
    );
};

export default Filter;