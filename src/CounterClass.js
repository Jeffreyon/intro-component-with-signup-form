import { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: props.startAt,
        };

        this.countUp = this.countUp.bind(this);
        this.countDown = this.countDown.bind(this);
    }

    static defaultProps = {
        startAt: 0,
        countBy: 1,
    };

    countUp = () => {
        this.setState({ counter: this.state.counter + this.props.countBy });
    };

    countDown = () => {
        this.setState({ counter: this.state.counter - this.props.countBy });
    };

    render() {
        return (
            <>
                <p>Start At: {this.props.startAt}</p>
                <p>Count By: {this.props.countBy}</p>
                <h4>{this.state.counter}</h4>
                <button className="btn btn-primary" onClick={this.countUp}>
                    +
                </button>
                <button className="btn btn-danger" onClick={this.countDown}>
                    -
                </button>
            </>
        );
    }
}

export default Counter;
