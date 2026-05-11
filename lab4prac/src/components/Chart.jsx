import {useState} from "react";
import * as d3 from "d3";
import ChartDraw from "./ChartDraw";

const Chart = ({data}) => {
    const [ox, setOx] = useState("Страна");
    const [oy, setOy] = useState([true, false]);
    const [type, setType] = useState("Точечная диаграмма");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const oyValues = [e.target["oy"][0].checked, e.target["oy"][1].checked];
        if (!oyValues[0] && !oyValues[1]) return setError(true);
        setError(false);
        setOx(e.target["ox"].value);
        setOy(oyValues);
        setType(e.target["type"].value);
    };

    const createArrGraph = (data, key) =>
        Array.from(d3.group(data, d => d[key]), ([labelX, items]) => ({
            labelX,
            values: d3.extent(items.map(d => d["Мощность"]))
        }));

    return (
        <>
            <h4>Визуализация</h4>
            <form onSubmit={handleSubmit}>
                <p>Значение по оси OX:</p>
                <div>
                    <input type="radio" name="ox" value="Страна" defaultChecked={ox === "Страна"}/> Страна
                    <input type="radio" name="ox" value="Тип" defaultChecked={ox === "Тип"}/> Тип
                    <input type="radio" name="ox" value="Вид топлива" defaultChecked={ox === "Вид топлива"}/> Вид
                    топлива
                </div>
                <p>Значение по оси OY:</p>
                <div style={{border: error ? "1px solid red" : "none", padding: "5px"}}
                >
                    <input type="checkbox" name="oy" onChange={() => setError(false)} defaultChecked={oy[0]}/> Макс.
                    Мощность<br/>
                    <input type="checkbox" name="oy" onChange={() => setError(false)} defaultChecked={oy[1]}/> Мин.
                    Мощность
                </div>
                <p>Тип диаграммы:
                    <select name="type" defaultValue={type}>
                        <option>Точечная диаграмма</option>
                        <option>Гистограмма</option>
                    </select>
                </p>
                <button type="submit">Построить</button>
            </form>
            {!error && <ChartDraw data={createArrGraph(data, ox)} oy={oy} type={type}/>}
        </>
    );
};

export default Chart;
