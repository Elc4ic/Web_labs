import './CSS/App.css';
import stations from './data.js';
import Table from "./components/Table";
import Filter from "./components/Filter";
import Sort from "./components/Sort";
import Chart from "./components/Chart";

const App = () => {

    return (
        <div className="App">
            <h1>Электростанции мира</h1>
            <div className="main-content">
                <Filter data={stations}>
                    {(filteredData) => (
                        <Sort data={filteredData}>
                            {(sortedData,showChart) => (
                                <div>
                                    {showChart && <Chart data={sortedData}/>}
                                    {sortedData.length > 0
                                        ? <Table data={sortedData} amountRows={15}/>
                                        : <p>По вашему запросу ничего не найдено.</p>}
                                </div>
                            )}
                        </Sort>
                    )}
                </Filter>
            </div>
        </div>
    );
};

export default App;