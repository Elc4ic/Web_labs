import {useState} from "react";

const useInput = (replaceArr) => {
    const [state, setStr] = useState({str: "", flag: false});

    const censored = () => {
        let text = state["str"];
        replaceArr.forEach((p) => {
            Object.entries(p).forEach(([key, value]) => {
                text = text.replaceAll(key.toUpperCase(), value.toUpperCase());
                text = text.replaceAll(key.toLowerCase(), value.toLowerCase());
            })
        });
        return text
    }

    return {
        censored,
        onChange: (val) => setStr({str: val, flag: false}),
        onExit: () => setStr({str: state["str"] , flag: true}),
        get: () => {
            console.log(state["flag"])
            return state["flag"] ? state["str"] : ""
        },
    };
};

const CensorInput = ({replaceArr}) => {
    const {censored, onChange, onExit, get} = useInput(replaceArr);

    return <div>
        <label>Поле с цензурой:
            <input
                onChange={e => onChange(e.target.value)}
                onBlur={e => onExit()}
                value={censored()}/>
        </label>
        <label>{get()}</label>
    </div>
};

export default CensorInput;