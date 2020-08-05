import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Counters from "./components/Counters";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counters: [
                { id: 1, value: 2 },
                { id: 2, value: 0 },
                { id: 3, value: 1 },
                { id: 4, value: 0 },
            ],
        };
    }

    handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value++;
        this.setState({ counters });
    };
    handleDecrement = (counter) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index].value--;
        this.setState({ counters });
    };

    handleDelete = (id) => {
        const counters = this.state.counters.filter((c) => c.id !== id);
        this.setState({ counters });
    };

    handleReset = () => {
        const counters = this.state.counters.map((c) => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };
    handleRestart = () => {
        this.setState({
            counters: [
                { id: 1, value: 2 },
                { id: 2, value: 0 },
                { id: 3, value: 1 },
                { id: 4, value: 0 },
            ],
        });
    };
    handleAddCounter = () => {
        const maxId = this.getMaxId();
        this.setState({
            counters: [...this.state.counters, { id: maxId + 1, value: 0 }],
        });
    };
    getMaxId = () => {
        let max = 0;
        this.state.counters.forEach((item) => {
            max = Math.max(item.id, max);
        });
        return max;
    };
    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={
                        this.state.counters.filter((c) => c.value > 0).length
                    }
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onReset={this.handleReset}
                        onRestart={this.handleRestart}
                        onAddCounter={this.handleAddCounter}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    />
                </main>
            </React.Fragment>
        );
    }
}

export default App;
