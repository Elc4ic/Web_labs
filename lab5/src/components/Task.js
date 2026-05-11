import {useEffect, useState} from "react";

const Timer = ({interval}) => {
    const [date, setDate] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(Date());
        }, interval);
        return () => clearInterval(intervalId);
    },);

    return (
        <div style={{ backgroundColor: `#${interval.toString(16).slice(0, 6).padStart(6, '0')}` }}>
            <p>{date.toString()}</p>
            <p>{interval}</p>
        </div>
    );
};

export default Timer