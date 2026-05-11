import './CSS/App.css';
import Table from "./components/Table";
import Filter from "./components/Filter";
import buildings from './data.js';
import Chart from "./components/Chart";
import FilterModel from "./components/FilterModel";
import TimerPlace from "./components/TimerPlace";

const App = () => {
    const {filters, filteredData, onChange, onClear} = FilterModel(buildings);

    return (
        <div className="App">
            <h3>Самые высокие здания и сооружения</h3>
            <TimerPlace/>
            <Filter filters={filters} onChange={onChange} onClear={onClear}/>
            <Chart data={filteredData}/>
            {filteredData.length > 0
                ? <Table data={filteredData} amountRows={15} showPagination/>
                : <p>По вашему запросу ничего не найдено.</p>}
        </div>
    );
};

export default App;