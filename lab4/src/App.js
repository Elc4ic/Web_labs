import './CSS/App.css';
import Table from "./components/Table";
import {useState} from "react";
import Filter from "./components/Filter";
import buildings from './data.js';
import CensorInput from "./components/Task";

const matchStr = (val, search) => String(val).toLowerCase().includes(search.toLowerCase());
const matchRange = (val,[min, max]) => Number(val) >= (min || -Infinity) && Number(val) <= (max || Infinity);

const useFilter = (data) => {
  const init = { name: '', type: '', country: '', city: '', year: ['', ''], height: ['', ''] };
  const[filters, setFilters] = useState(init);

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
    onChange: (key, val) => setFilters(prev => ({ ...prev, [key]: val })),
    onClear: () => setFilters(init)
  };
};

const arr = [
  {"Q":""},
  {"X":""},
  {"W":""},
  {"Ё":"Е"},
  {"Х":"Г"},
]

const App = () => {
  const { filters, filteredData, onChange, onClear } = useFilter(buildings);

  return (
      <div className="App">
        <h3>Самые высокие здания и сооружения</h3>
        <CensorInput replaceArr={arr}/>
        <Filter filters={filters} onChange={onChange} onClear={onClear} />

        {filteredData.length > 0
            ? <Table data={filteredData} amountRows={15} showPagination />
            : <p>По вашему запросу ничего не найдено.</p>}
      </div>
  );
};

export default App;