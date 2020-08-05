import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>
                        {this.formatCount()}
                    </span>
                </div>
                <div className="col">
                    <button
                        onClick={() =>
                            this.props.onIncrement(this.props.counter)
                        }
                        className="btn btn-secondary btn-sm"
                    >
                        +
                    </button>
                    <button
                        onClick={() =>
                            this.props.onDecrement(this.props.counter)
                        }
                        className="btn btn-secondary btn-sm m-2"
                        disabled={
                            this.props.counter.value === 0 ? "disabled" : ""
                        }
                    >
                        -
                    </button>
                    <button
                        onClick={() =>
                            this.props.onDelete(this.props.counter.id)
                        }
                        className="btn btn-danger btn-sm"
                    >
                        X
                    </button>
                </div>
            </div>
        );
    }
    getBadgeClasses() {
        let badgeType = this.props.counter.value === 0 ? "warning" : "primary";
        const classes = "badge m-2 badge-" + badgeType;
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;
