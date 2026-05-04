import React from "react";

function InfoNumber(props) {
    const len = props.value.length;
    const n = parseInt(props.value);
    const root = Math.sqrt(n);
    const flag = Number.isInteger(root);
    return (
        <>
            <p>Число {n}</p>
            <ul>
                <li>{len}</li>
                <li>{n % 2 === 1 ? "Чет" : "Нечет"}</li>
                <li>{flag ? "корень " + root : "Нет"}</li>
            </ul>
        </>
    )
}

function Temp(props) {
    const kel = props.valueK
    const far = props.valueF
    const kelC = Number(kel) - 273.15
    const farC = (Number(far) - 32) / 1.8
    return (
        <>
            <p onClick={alert(`Подтверждение с действием\n${kel} = ${kelC}`)}>Температура {kel}</p>
            <p onClick={alert(`Подтверждение с действием\n${far} = ${farC}`)}>Температура {far}</p>
        </>
    )
}

class IntNum extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [Number(props.firstValue)]
        }
    }

    state = {
        nums: [Number(this.props.firstValue)]
    }

    nextNum = () => {
        this.setState((prevState) => {
            const {nums} = prevState;
            const last = nums[prevState.cur];
            const next = last + Number(this.props.step);

            return {
                nums: [...nums + last],
            }
        })
    }

    render() {
        return (
            <p>
                {this.state.nums.join(' ')}
                <span onClick={this.nextNum}>
                    {this.state.nums}
                </span>
            </p>
        )
    }
}

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nums: [Number(props.firstValue)]
        }
    }

    state = {
        nums: [Number(this.props.firstValue)]
    }

    nextNum = () => {
        this.setState((prevState) => {
            const {nums} = prevState;
            const last = nums[prevState.cur];
            const next = last + Number(this.props.step);

            return {
                nums: [...nums + last],
            }
        })
    }

    render() {
        return (
            <p>
                {this.state.nums.join(' ')}
                <span onClick={this.nextNum}>
                    {this.state.nums}
                </span>
            </p>
        )
    }
}
