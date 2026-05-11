import {useState} from "react";
import Timer from "./Task";

const TimerPlace = () => {
    const [interval, setInterval] = useState(0);

    return <div>
        <label>Интервал:
            <input type={"number"} value={interval} onChange={e => setInterval(Number(e.target.value))}/>
        </label>
        <Timer interval={interval} />
    </div>

}
export default TimerPlace;