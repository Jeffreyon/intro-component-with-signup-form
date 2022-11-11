import { useState } from "react";

function Counter(props) {
    const [counter, setCounter] = useState(props.startAt);

    //setTimeout(() => setCounter(counter + props.countBy), 1000);

    const countUp = () => setCounter(counter + props.countBy);
    const countDown = () => setCounter(counter - props.countBy);

    return (
        <>
            <p>Start At: {props.startAt}</p>
            <p>Count By: {props.countBy}</p>
            <h4>{counter}</h4>
            <button className="btn btn-primary" onClick={countUp}>
                +
            </button>
            <button className="btn btn-danger" onClick={countDown}>
                -
            </button>
        </>
    );
}

Counter.defaultProps = {
    startAt: 0,
    countBy: 1,
};

export default Counter;
