import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
    render() {
        return (
            <div>
                <button
                    onClick={this.props.onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                <button
                    onClick={this.props.onRestart}
                    className="btn btn-danger btn-sm m-2"
                >
                    Restart
                </button>
                <button
                    onClick={this.props.onAddCounter}
                    className="btn btn-success btn-sm m-2"
                >
                    +
                </button>
                {this.props.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={() => this.props.onDelete(counter.id)}
                        onIncrement={this.props.onIncrement}
                        onDecrement={this.props.onDecrement}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
